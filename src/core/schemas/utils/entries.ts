export function entries<T>(object: T): [keyof T, T[keyof T]][] {
    if (object == null) {
        return [];
    }
    return Object.entries(object) as [keyof T, T[keyof T]][];
}
