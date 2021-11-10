export declare type ActionMap<M extends {
    [index: string]: any;
}> = {
    [Key in keyof M]: M[Key] extends undefined ? {
        type: Key;
    } : {
        type: Key;
        payload: M[Key];
    };
};
//# sourceMappingURL=reducer.d.ts.map