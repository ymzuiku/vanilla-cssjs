declare const css: {
    (...args: any[]): (bem?: Function | undefined) => void;
    bem(reg?: string, bem?: string | undefined): (...args: any[]) => string;
};
export default css;
