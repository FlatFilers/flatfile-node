/**
 * Utility functions for type casting in FlatfileRecord
 */

export function isPresent(value: any): boolean {
    return value !== null && value !== undefined && value !== "";
}

export function asString(value: any): string {
    if (value === null || value === undefined) {
        return "";
    }
    return String(value);
}

export function asNullableString(value: any): string | null {
    if (value === null || value === undefined || value === "") {
        return null;
    }
    return String(value);
}

export function asBool(value: any): boolean {
    if (typeof value === "boolean") {
        return value;
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        return lower === "true" || lower === "yes" || lower === "1";
    }
    if (typeof value === "number") {
        return value !== 0;
    }
    return Boolean(value);
}

export function asNumber(value: any): number | null {
    if (value === null || value === undefined || value === "") {
        return null;
    }
    const num = Number(value);
    return isNaN(num) ? null : num;
}

export function asDate(value: any): Date | null {
    if (value === null || value === undefined || value === "") {
        return null;
    }
    if (value instanceof Date) {
        return value;
    }
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
}

// Constants for hash generation
export const HASH_PROP_DELIM = "|";
export const HASH_VALUE_DELIM = ":";
