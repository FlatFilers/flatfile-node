export function entries<T>(object: T): [keyof T, T[keyof T]][] {
    return Object.entries(object as Record<keyof T, T[keyof T]>) as [keyof T, T[keyof T]][];
}
