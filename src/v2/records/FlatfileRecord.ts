import { HASH_PROP_DELIM, HASH_VALUE_DELIM, asBool, asDate, asNullableString, asNumber, asString, isPresent } from "./utils";
import { JsonlRecord, Primitive } from "./types";

// Browser-compatible UUID generation
function generateUUID(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    // Fallback for older browsers
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

type AnyRecord = {
    [k: string]: any;
};

type CastingMethod = "str" | "defStr" | "bool" | "num" | "date";

export class FlatfileRecord<T extends JsonlRecord = JsonlRecord> {
    private _changes: Map<string, any> = new Map();
    private _errs: Map<string, Set<string>> = new Map();
    private _metadata: Record<string, any>;
    private _deleted = false;
    private _tempId?: string;
    private _info: Map<any, Set<string>> = new Map();
    private _warns: Map<any, Set<string>> = new Map();

    constructor(
        public data: Readonly<T>,
        dirty = false,
    ) {
        this._metadata = data.__m || {};

        if (dirty) {
            this.data = Object.freeze({} as T);
            Object.entries(data).forEach(([key, value]) => {
                this.set(key, value);
            });
        } else {
            Object.freeze(this.data);
        }

        if (data.__i) {
            data.__i.forEach((message: { x: string; m: string; t?: string }) => {
                if (!message.t || message.t === "error") {
                    if (!this._errs.has(message.x)) {
                        this._errs.set(message.x, new Set())
                    }
                    this._errs.get(message.x)?.add(message.m)
                } else if (message.t === "info") {
                    if (!this._info.has(message.x)) {
                        this._info.set(message.x, new Set())
                    }
                    this._info.get(message.x)?.add(message.m)
                } else if (message.t === "warn") {
                    if (!this._warns.has(message.x)) {
                        this._warns.set(message.x, new Set())
                    }
                    this._warns.get(message.x)?.add(message.m)
                }
            })
        }
    }

    get id() {
        return this.data.__k || this._tempId;
    }

    get meta(): Record<string, any> {
        return this._metadata;
    }

    get slug() {
        return this.data.__n;
    }

    get sheetId() {
        return this.data.__s;
    }

    getLinks(key?: string) {
        if (key) {
            return this.data.__l?.filter((link) => link.__x === key) || [];
        }
        return this.data.__l || [];
    }

    set(key: string, value: any) {
        if (this.data[key] === value) {
            this._changes.delete(key);
            return;
        }
        this._changes.set(key, value);
        return this;
    }

    flag(key: string) {
        this.set(key, true);
    }

    unflag(key: string) {
        this.set(key, false);
    }

    get(key: string) {
        if (this._changes.has(key)) {
            return this._changes.get(key);
        }
        return this.data[key];
    }

    has(key: string) {
        return isPresent(this.get(key));
    }

    hasAny(...keys: string[]) {
        return keys.some((k) => this.has(k));
    }

    hasAll(...keys: string[]) {
        return keys.every((k) => this.has(k));
    }

    isEmpty(key: string) {
        return !this.has(key);
    }

    keys(options?: { omit?: string[]; pick?: string[] }): string[] {
        const set = new Set<string>(Object.keys(this.data).filter((key) => !key.startsWith("__")));

        for (const key of this._changes.keys()) {
            if (!key.startsWith("__")) {
                set.add(key);
            }
        }
        const res = Array.from(set);

        const omitKeys = options?.omit;
        if (omitKeys?.length) {
            return res.filter((key) => !omitKeys.includes(key));
        }

        const pickKeys = options?.pick;
        if (pickKeys?.length) {
            return res.filter((key) => pickKeys.includes(key));
        }

        return res;
    }

    keysWithData(props?: { exclude?: Array<string | string[]> }): string[] {
        const keys = this.keys().filter((k) => this.has(k));
        if (props?.exclude) {
            const f = props.exclude.flat();
            return keys.filter((k) => !f.includes(k));
        }
        return keys;
    }

    intersects(item: FlatfileRecord, keys: string[]) {
        return keys.every((key) => {
            const value1 = this.str(key);
            const value2 = item.str(key);
            return value1 === value2;
        });
    }

    hash(...keys: string[]) {
        return keys
            .map((k) => [k, this.get(k)])
            .map(([k, v]) => `${k}${HASH_VALUE_DELIM}${asString(v)}`)
            .join(HASH_PROP_DELIM);
    }

    isDirty(key?: string): boolean {
        if (key) {
            return (
                this._changes.has(key) ||
                (this._errs.get(key)?.size ?? 0) > 0 ||
                (this._info.get(key)?.size ?? 0) > 0 ||
                (this._warns.get(key)?.size ?? 0) > 0
            );
        }
        return (
            this._changes.size > 0 || this._errs.size > 0 || this._info.size > 0 || this._warns.size > 0 || this._deleted
        );
    }

    eachOfKeysPresent(keys: string[], callback: (key: string, value: any) => void) {
        for (const key of keys) {
            if (this.has(key)) {
                callback(key, this.get(key));
            }
        }
    }

    isDeleted(): boolean {
        return this._deleted;
    }

    delete() {
        this._deleted = true;
    }

    str(key: string) {
        return asNullableString(this.get(key));
    }

    defStr(key: string): string {
        return asString(this.get(key));
    }

    bool(key: string) {
        return asBool(this.get(key));
    }

    num(key: string) {
        return asNumber(this.get(key));
    }

    date(key: string) {
        return asDate(this.get(key));
    }

    pick(...keys: string[]) {
        const obj: Record<string, any> = {};
        for (const key of keys) {
            obj[key] = this.get(key);
        }
        return obj;
    }

    err(key: string, msg: string) {
        if (!this._errs.has(key)) {
            this._errs.set(key, new Set([msg]));
        }
        const errors = this._errs.get(key);
        if (errors) {
            errors.add(msg);
        }
        return this;
    }

    values(castAs?: CastingMethod) {
        if (!castAs) {
            return Object.fromEntries(this.entries());
        }

        return Object.fromEntries(this.keys().map((key) => [key, this[castAs](key)]));
    }

    entries() {
        return this.keys().map((key) => [key, this.get(key)]);
    }

    merge(item: FlatfileRecord, props: { overwrite?: boolean } = {}) {
        for (const key of item.keys()) {
            if (props.overwrite) {
                this.set(key, item.get(key));
            } else if (!this.has(key)) {
                this.set(key, item.get(key));
            }
        }
        return this;
    }

    hasConflict(b: FlatfileRecord, keys?: string[]) {
        if (keys) {
            return keys.some((key) => {
                const aValue = this.get(key);
                const bValue = b.get(key);
                return aValue && bValue && aValue !== bValue;
            });
        }
        return this.entries().some(([key, aValue]) => {
            const bValue = b.get(key);
            return aValue && bValue && aValue !== bValue;
        });
    }

    toJSON(): JsonlRecord {
        return { ...this.data, ...this.changeset() } as JsonlRecord;
    }

    toSimpleRecord() {
        return {
            _id: this.id,
            ...this.values(),
        };
    }

    copy(props: { mixin?: FlatfileRecord; select?: string[]; slug?: string; sheetId?: string } = {}) {
        const newObj = new FlatfileRecord({} as JsonlRecord);
        newObj._tempId = `TEMP_${generateUUID()}`;
        if (props.slug) {
            newObj.set("__n", props.slug);
        }
        if (props.sheetId) {
            newObj.set("__s", props.sheetId);
        }
        if (props.select) {
            for (const key of props.select) {
                newObj.set(key, props.mixin?.get(key) ?? this.get(key));
            }
        } else {
            for (const key in this.data) {
                if (!key.startsWith("__")) {
                    newObj.set(key, this.get(key));
                }
            }
            if (props.mixin) {
                for (const key in props.mixin.data) {
                    if (!key.startsWith("__")) {
                        newObj.set(key, props.mixin.get(key));
                    }
                }
            }
        }
        return newObj;
    }

    commit() {
        const newObj: Record<string, any> = Object.assign({}, this.data);
        for (const [key, value] of this._changes) {
            newObj[key] = value;
        }
        this._changes.clear();

        if (this._errs.size) {
            newObj.__i = [];
            for (const [key, errs] of this._errs) {
                for (const err of errs) {
                    newObj.__i.push({ x: key, m: err });
                }
            }
        }
        this._errs.clear();

        if (this._info.size) {
            newObj.__i = newObj.__i || [];
            for (const [key, errs] of this._info) {
                for (const err of errs) {
                    newObj.__i.push({ x: key, m: err, t: "info" });
                }
            }
        }
        this._info.clear();

        if (this._warns.size) {
            newObj.__i = newObj.__i || [];
            for (const [key, errs] of this._warns) {
                for (const err of errs) {
                    newObj.__i.push({ x: key, m: err, t: "warn" });
                }
            }
        }
        this._warns.clear();

        this.data = Object.freeze(newObj) as any;
    }

    changeset() {
        const val = Object.fromEntries(this._changes)
        val.__k = this.get("__k")
        val.__s = this.get("__s")
        val.__n = this.get("__n")
        val.__m = this.get("__m")
        val.__c = this.get("__c")
        
        if (this._deleted) {
            val.__d = true
        }
        if (this._errs.size || this._info.size || this._warns.size) {
            if (!val.__i) {
                val.__i = []
            }
            for (const [key, errs] of this._errs) {
                for (const err of errs) {
                    val[key] = this.get(key)
                    val.__i.push({ x: key, m: err })
                }
            }
            for (const [key, infos] of this._info) {
                for (const info of infos) {
                    val[key] = this.get(key)

                    val.__i.push({ x: key, m: info, t: "info" })
                }
            }
            for (const [key, warns] of this._warns) {
                for (const warn of warns) {
                    val[key] = this.get(key)

                    val.__i.push({ x: key, m: warn, t: "warn" })
                }
            }
        }
        return val
    }

    /**
     * @deprecated use .err() instead
     */
    addError(key: string, msg: string) {
        return this.err(key, msg);
    }

    hasError(...keys: string[]) {
        if (keys.length > 0) {
            return keys.some((key) => this._errs.has(key) && this._errs.get(key)!.size > 0);
        }
        return this._errs.size > 0;
    }

    errorFields(...keys: string[]) {
        if (keys.length > 0) {
            return keys.filter((key) => this._errs.has(key) && this._errs.get(key)!.size > 0);
        }
        return Array.from(this._errs.keys());
    }

    errorIf(key: string, cb: (val: any) => any, err: string) {
        if (cb(this.get(key))) {
            this.err(key, err);
        }
    }

    info(key: string, msg: string) {
        if (!this._info.has(key)) {
            this._info.set(key, new Set([msg]));
        }
        const infos = this._info.get(key);
        if (infos) {
            infos.add(msg);
        }
        return this;
    }

    /**
     * @deprecated use .info() instead
     */
    addComment(key: string, msg: string) {
        return this.info(key, msg);
    }

    /**
     * @deprecated use .info() instead
     */
    addInfo(key: string, msg: string) {
        return this.info(key, msg);
    }

    warn(key: string, msg: string) {
        if (!this._warns.has(key)) {
            this._warns.set(key, new Set([msg]));
        }
        const warnings = this._warns.get(key);
        if (warnings) {
            warnings.add(msg);
        }
        return this;
    }

    /**
     * @deprecated use .warn() instead
     */
    addWarning(key: string, msg: string) {
        return this.warn(key, msg);
    }

    setReadOnly(key: string) {
        this.setFieldConfig(key, { readonly: true });
    }

    setConfig(setter: (config: any) => any) {
        const baseConfig = this.data.__c || {};
        this._changes.set("__c", setter(baseConfig));
    }

    setFieldConfig(key: string, newConfig: any) {
        this.setConfig((config: any) => {
            config.fields = config.fields || {};
            const baseConfig = config.fields[key as string] || {};
            config.fields[key as string] = { ...baseConfig, ...newConfig };
            return config;
        });
    }
}
