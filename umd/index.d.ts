declare const css: {
    (template: any, ...args: any[]): (bem?: string | undefined) => void;
    class<T>(target: T, className: string, bem?: string | undefined): T;
    bem(): string;
};
export default css;
