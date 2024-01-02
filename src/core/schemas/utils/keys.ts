export function keys<T>(object: T): (keyof T)[] {
    if (object == null) {
        return [];
    }
    return Object.keys(object) as (keyof T)[];
}
