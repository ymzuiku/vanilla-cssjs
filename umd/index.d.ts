declare const css: {
    (template: any, ...args: any[]): (bem?: Function | undefined) => void;
    class<T>(target: T, className: string, bem?: Function | undefined): T;
    bem(bem?: string): (text: string) => string;
};
export default css;
