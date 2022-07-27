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
