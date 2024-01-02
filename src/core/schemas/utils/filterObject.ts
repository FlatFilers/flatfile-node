export function filterObject<T, K extends keyof T>(obj: T, keysToInclude: K[]): Pick<T, K> {
    if (obj == null || keysToInclude.length === 0) {
        return {} as Pick<T, K>;
    }
    const keysToIncludeSet = new Set(keysToInclude);
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (keysToIncludeSet.has(key as K)) {
            acc[key as K] = value as T[K]; // Fix: Type assertion to cast value to T[K]
        }
        return acc;
        // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    }, {} as Pick<T, K>);
}
