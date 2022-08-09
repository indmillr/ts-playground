let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string; // converts 'unknown' type to 'string' type

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number; // must convert to Unknown THEN to number

//console.log(vAny.foo());
//console.log(vUnknown.foo());
