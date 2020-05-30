declare function css(...args: any): (...args: any) => string;
declare namespace css {
    var merge: (cssMap: {
        [key: string]: any;
    }) => string;
    var bem: string;
}
export default css;
