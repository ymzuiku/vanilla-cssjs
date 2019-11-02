declare const css: {
    (...args: any[]): (bem?: Function | undefined) => void;
    bem(bem?: string): (...args: any[]) => string;
};
export default css;
