/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Accounts } from "./api/resources/accounts/client/Client";
import { Actions } from "./api/resources/actions/client/Client";
import { AgentExports } from "./api/resources/agentExports/client/Client";
import { Agents } from "./api/resources/agents/client/Client";
import { Apps } from "./api/resources/apps/client/Client";
import { Assistant } from "./api/resources/assistant/client/Client";
import { Auth } from "./api/resources/auth/client/Client";
import { CanvasAreas } from "./api/resources/canvasAreas/client/Client";
import { Cells } from "./api/resources/cells/client/Client";
import { Commits } from "./api/resources/commits/client/Client";
import { DataRetentionPolicies } from "./api/resources/dataRetentionPolicies/client/Client";
import { Documents } from "./api/resources/documents/client/Client";
import { Entitlements } from "./api/resources/entitlements/client/Client";
import { Environments } from "./api/resources/environments/client/Client";
import { Events } from "./api/resources/events/client/Client";
import { Files } from "./api/resources/files/client/Client";
import { Foreigndb } from "./api/resources/foreigndb/client/Client";
import { Guests } from "./api/resources/guests/client/Client";
import { Jobs } from "./api/resources/jobs/client/Client";
import { Mapping } from "./api/resources/mapping/client/Client";
import { Records } from "./api/resources/records/client/Client";
import { Roles } from "./api/resources/roles/client/Client";
import { Routines } from "./api/resources/routines/client/Client";
import { Runbooks } from "./api/resources/runbooks/client/Client";
import { Secrets } from "./api/resources/secrets/client/Client";
import { Sheets } from "./api/resources/sheets/client/Client";
import { Snapshots } from "./api/resources/snapshots/client/Client";
import { Spaces } from "./api/resources/spaces/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Versions } from "./api/resources/versions/client/Client";
import { Views } from "./api/resources/views/client/Client";
import { Workbooks } from "./api/resources/workbooks/client/Client";

export declare namespace FlatfileClient {
    export interface Options {
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Disable-Hooks header */
        xDisableHooks?: "true";
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Disable-Hooks header */
        xDisableHooks?: "true";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class FlatfileClient {
    protected _accounts: Accounts | undefined;
    protected _actions: Actions | undefined;
    protected _agentExports: AgentExports | undefined;
    protected _agents: Agents | undefined;
    protected _apps: Apps | undefined;
    protected _assistant: Assistant | undefined;
    protected _auth: Auth | undefined;
    protected _canvasAreas: CanvasAreas | undefined;
    protected _cells: Cells | undefined;
    protected _commits: Commits | undefined;
    protected _dataRetentionPolicies: DataRetentionPolicies | undefined;
    protected _documents: Documents | undefined;
    protected _entitlements: Entitlements | undefined;
    protected _environments: Environments | undefined;
    protected _events: Events | undefined;
    protected _files: Files | undefined;
    protected _foreigndb: Foreigndb | undefined;
    protected _guests: Guests | undefined;
    protected _jobs: Jobs | undefined;
    protected _mapping: Mapping | undefined;
    protected _records: Records | undefined;
    protected _roles: Roles | undefined;
    protected _routines: Routines | undefined;
    protected _runbooks: Runbooks | undefined;
    protected _secrets: Secrets | undefined;
    protected _sheets: Sheets | undefined;
    protected _snapshots: Snapshots | undefined;
    protected _spaces: Spaces | undefined;
    protected _users: Users | undefined;
    protected _versions: Versions | undefined;
    protected _views: Views | undefined;
    protected _workbooks: Workbooks | undefined;

    constructor(protected readonly _options: FlatfileClient.Options = {}) {}

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }

    public get actions(): Actions {
        return (this._actions ??= new Actions(this._options));
    }

    public get agentExports(): AgentExports {
        return (this._agentExports ??= new AgentExports(this._options));
    }

    public get agents(): Agents {
        return (this._agents ??= new Agents(this._options));
    }

    public get apps(): Apps {
        return (this._apps ??= new Apps(this._options));
    }

    public get assistant(): Assistant {
        return (this._assistant ??= new Assistant(this._options));
    }

    public get auth(): Auth {
        return (this._auth ??= new Auth(this._options));
    }

    public get canvasAreas(): CanvasAreas {
        return (this._canvasAreas ??= new CanvasAreas(this._options));
    }

    public get cells(): Cells {
        return (this._cells ??= new Cells(this._options));
    }

    public get commits(): Commits {
        return (this._commits ??= new Commits(this._options));
    }

    public get dataRetentionPolicies(): DataRetentionPolicies {
        return (this._dataRetentionPolicies ??= new DataRetentionPolicies(this._options));
    }

    public get documents(): Documents {
        return (this._documents ??= new Documents(this._options));
    }

    public get entitlements(): Entitlements {
        return (this._entitlements ??= new Entitlements(this._options));
    }

    public get environments(): Environments {
        return (this._environments ??= new Environments(this._options));
    }

    public get events(): Events {
        return (this._events ??= new Events(this._options));
    }

    public get files(): Files {
        return (this._files ??= new Files(this._options));
    }

    public get foreigndb(): Foreigndb {
        return (this._foreigndb ??= new Foreigndb(this._options));
    }

    public get guests(): Guests {
        return (this._guests ??= new Guests(this._options));
    }

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs(this._options));
    }

    public get mapping(): Mapping {
        return (this._mapping ??= new Mapping(this._options));
    }

    public get records(): Records {
        return (this._records ??= new Records(this._options));
    }

    public get roles(): Roles {
        return (this._roles ??= new Roles(this._options));
    }

    public get routines(): Routines {
        return (this._routines ??= new Routines(this._options));
    }

    public get runbooks(): Runbooks {
        return (this._runbooks ??= new Runbooks(this._options));
    }

    public get secrets(): Secrets {
        return (this._secrets ??= new Secrets(this._options));
    }

    public get sheets(): Sheets {
        return (this._sheets ??= new Sheets(this._options));
    }

    public get snapshots(): Snapshots {
        return (this._snapshots ??= new Snapshots(this._options));
    }

    public get spaces(): Spaces {
        return (this._spaces ??= new Spaces(this._options));
    }

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    public get versions(): Versions {
        return (this._versions ??= new Versions(this._options));
    }

    public get views(): Views {
        return (this._views ??= new Views(this._options));
    }

    public get workbooks(): Workbooks {
        return (this._workbooks ??= new Workbooks(this._options));
    }
}
