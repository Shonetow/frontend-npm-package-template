declare enum ErrorMessages {
    INVALID_NUMBER = "Number must be greater then 1"
}
declare const isPrimeNumber: (num: number) => boolean | never;
export { isPrimeNumber, ErrorMessages };
declare interface kamikaze {
    add: (a: number, b: number) => number;
}
declare const _default: () => kamikaze;
export default _default;
