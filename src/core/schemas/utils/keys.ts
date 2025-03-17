export function keys<T>(object: T): (keyof T)[] {
    return Object.keys(object as Record<keyof T, T[keyof T]>) as (keyof T)[];
}
