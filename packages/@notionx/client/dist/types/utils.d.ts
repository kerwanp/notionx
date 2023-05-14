export type JustProps<ObjectType> = Pick<ObjectType, {
    [Property in keyof ObjectType]: ObjectType[Property] extends (...args: unknown[]) => unknown ? never : Property;
}[keyof ObjectType]>;
//# sourceMappingURL=utils.d.ts.map