console.log('Hello Typescript!');

// 220726
const good = {
    bang: 'root',
};

// good.cang() -> error occurs. cannot be compiled

// [1, 2, 3] + false -> type error

const remainder = (a: number, b: number) => {
    return a % b;
};

// remainder(3) -> error for number of arguments

// 220727

let a = 'good';
a = 'bad';
// a = 3; -> expected to error in Typescript!

// let b: boolean = "fault" -> expected to error
let b: boolean = true;

let c = [4, 5, 6];
// c.push('a'); -> expected to error
c.push(3);

const d = { a: 3 };
// d.a = 'a'; -> expected to error
d.a = 4;
// d.good; -> expected to error

// 220728

const noGood: object = {
    name: 'Kim',
};

// noGood.name; -> expected to error

const noGood2: {
    name: string;
    // age: number
    age?: number;
} = {
    name: 'kim',
};

// if (noGood2.age > 10) {} -> expected to error
if (noGood2.age && noGood2.age > 10) {
}

type Player = {
    name: string;
    age?: number;
};

const p1: Player = {
    name: 'Kim',
};

const p2: Player = {
    name: 'Lee',
    age: 18,
};

const playerMaker1 = (name: string) => {
    return {
        name,
    };
};

const p3 = playerMaker1('Park');
// p3.age = 18 -> expected to error

const playerMaker2 = (name: string): Player => {
    return {
        name,
    };
};

const p4 = playerMaker2('Choi');
p4.age = 18;

// 220729

type Player11 = {
    readonly name: string;
    age?: number;
};

const playerMaker3 = (name: string): Player11 => {
    return {
        name,
    };
};

const p5 = playerMaker3('kim');
// p5.name = 'lee' -> expected to error

const arr11: readonly number[] = [1, 2, 3];

// arr11.push(3) -> expected to error

const p6: [string, number, boolean] = ['kim', 0, true];
// p6[0] = 0; -> expected to error
p6[0] = 'Lee';
const p7: readonly [string, number, boolean] = ['kim', 0, true];
// p7[0] = "Lee"; -> expected to error

const aa: any[] = [1, 2, 3, 4];
const bb: any = true;

aa + bb; // ???

// 220730

let aaaa: unknown;

if (typeof aaaa === 'number') {
    let a123 = aaaa + 1;
}

// aaaa.slice(1) -> expected to error

if (typeof aaaa === 'string') {
    let a123 = aaaa.slice(1);
}

const sdf3 = (): never => {
    // return "X" -> expected to error
    throw new Error('sss');
};

const aaa33 = (name: string | number) => {
    if (typeof name === 'string') {
        name; // expected to string type
    } else if (typeof name === 'number') {
        name; // expected to number type
    } else {
        name; // expected to 'never' type. This sequence should not be executed if parameter inserts proper type
    }
};

// 220731

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};

// 220801

type Add2 = {
    (a: number, b: number): number;
    (a: number, b: string): number;
};

// const add2: Add2 = (a, b) => {
//     return a + b; // expected to error
// }

const add2: Add2 = (a, b) => {
    if (typeof b === 'string') {
        return a;
    }
    return a + b;
};

type Config = {
    path: string;
    state: object;
};

type Push = {
    (path: string): void;
    (config: Config): void;
};

const push: Push = (config) => {
    if (typeof config === 'string') {
        console.log(config);
    } else {
        console.log(config.path);
    }
};

type Add3 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
};

// const add3: Add3 = (a, b, c) => { // expeted to error
//     return a + b;
// }

const add3: Add3 = (a, b, c?: number) => {
    if (c) {
        return a + b + c;
    } else {
        return a + b;
    }
};

// 220802

type SuperPrint = {
    (arr: number[]): void;
    (arr: boolean[]): void;
    (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
    arr.forEach((i) => {
        console.log(i);
    });
};

superPrint([1, 2, 3, 4]);
superPrint([true]);
superPrint(['a', 'b', 'c']);
// superPrint([333, true, "a", "b", "c"]) -> expected to error.

type SuperPrint2 = {
    // <TypePlaceholder>(arr: TypePlaceholder[]):void
    <T>(arr: T[]): void;
};

const superPrint2: SuperPrint2 = (arr) => {
    arr.forEach((i) => {
        console.log(i);
    });
};

superPrint2([1, 2, 3, 4]);
superPrint2([true]);
superPrint2(['a', 'b', 'c']);
superPrint2([333, true, 'a', 'b', 'c']);

// 220803

type SuperPrint3 = {
    <T, M>(arr: T[], b: M): void;
};

const superPrint3: SuperPrint3 = (arr) => {
    arr.forEach((i) => {
        console.log(i);
    });
};

superPrint3([1, 2, 3], 'X');

// 220804

const superPrint4 = <T>(a: T[]) => {
    return a[0];
};

superPrint4([1, 2, true, 'X']);

type Player2<E> = {
    name: String;
    extraInfo: E;
};

const kimPlayer: Player2<{ FavFood: String }> = {
    name: 'kimkim',
    extraInfo: { FavFood: 'Sio' },
};

type kimPlayer22 = Player2<{ FavFood: String }>;

const kimPlayer2: kimPlayer22 = {
    name: 'kimkim',
    extraInfo: { FavFood: 'Sio' },
};

type extra = { FavFood: String };

type kimPlayer33 = Player2<extra>;

const kimPlayer3: kimPlayer33 = {
    name: 'kimkim',
    extraInfo: { FavFood: 'Sio' },
};

const leePlayer: Player2<null> = {
    name: 'lee',
    extraInfo: null,
};

const printAllNumber = (arr: number[]) => {
    console.log(arr);
};

const printAllNumber2 = (arr: Array<number>) => {
    console.log(arr);
};

//
