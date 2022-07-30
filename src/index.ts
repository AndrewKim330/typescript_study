import { PassThrough } from 'stream';

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

//
