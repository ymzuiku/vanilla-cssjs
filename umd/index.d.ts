declare function css(...args: any): (bemStr: string) => {
    (...args: any): string;
    init(): void;
};
export default css;
