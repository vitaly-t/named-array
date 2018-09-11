///////////////////////////////////////
// named-array typescript declarations
///////////////////////////////////////

type PropertyOptions = {
    configurable?: boolean,
    enumerable?: boolean,
    writable?: boolean
};

type ArrayPropNames = { [name: string]: any };

declare interface Array<T> {
    addProperties(props: string[], options: PropertyOptions): Array<T> | ArrayPropNames;

    addProperties<APN>(props: string[], options: PropertyOptions): Array<T> | APN;
}

declare interface Object {
    toNamedArray<T>(options: PropertyOptions): Array<T> | ArrayPropNames;

    toNamedArray<T, APN>(options: PropertyOptions): Array<T> | APN;
}
