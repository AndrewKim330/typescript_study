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

//
