declare function css(...args: any): (bemStr?: string | undefined) => {
    (...args: any): string;
    init(): void;
};
export default css;
