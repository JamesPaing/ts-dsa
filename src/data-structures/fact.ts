export function fact(n: number): number {
    if (n >= 1) {
        return n * fact(n - 1);
    }

    return 1;
}
