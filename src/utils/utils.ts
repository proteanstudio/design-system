export function format(first: string, middle: string, last: string): string {
    return (
        (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
    );
}

let guid = 1000;
export function createGuid(): number {
    return guid++;
}
