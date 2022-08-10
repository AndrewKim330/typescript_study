import { type } from 'os';
import { getEffectiveConstraintOfTypeParameter } from 'typescript';

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

// 220805

class Player33 {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickNmae: string
    ) {}
}

const player333 = new Player33('ruben', 'Kim', 'ruben');

abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickNmae: string
    ) {}
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// const playerError = new User -> expected to error

class Player44 extends User {}

abstract class User2 {
    constructor(
        private firstName: string,
        private lastName: string,
        private nickName: string
    ) {}
    abstract getNickName(): void;

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player55 extends User2 {
    getNickName(): void {
        // console.log(this.nickName) -> exptected to error
    }
}

abstract class User3 {
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickName: string
    ) {}
    abstract getNickName(): void;

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player66 extends User3 {
    getNickName(): void {
        console.log(this.nickName);
    }
}

const good111 = new Player66('aaa', 'bbb', 'ccc');

good111.getFullName();
// good111.nickName -> exptected to error

// 220806

type Words = {
    [key: string]: string;
};

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term];
    }
    // TBD: make CRUD methods
}

class Word {
    constructor(public term: string, public def: string) {}
}

const parapluie = new Word('parapluie', 'umbrella');

const dict = new Dict();

dict.add(parapluie);
dict.def('parapluie');

// 220807

class Word2 {
    constructor(public readonly term: string, public readonly def: string) {}
}

const parapluie2 = new Word2('parapluie', 'umbrella');

// parapluie2.def = 'sss' -> expected to error

type Player1234 = {
    nickName: string;
    healthBar: number;
};

const ggg: Player1234 = {
    nickName: 'ggg',
    healthBar: 10,
};

type Food = String;
const croissant: Food = "C'est bon";

type Team = 'red' | 'blue' | 'yellow';
type Health = 1 | 5 | 10;

type Player467 = {
    nickName: string;
    team: Team;
    health: Health;
};

const sss: Player467 = {
    nickName: 'sss',
    team: 'blue',
    //team:"pink", -> expected to error
    health: 5,
    // health: 7 -> expected to error
};

interface User77 {
    name: string;
}

// interface User77 = {} -> expected to error

interface Player11356 extends User77 {
    sports: string;
}

const qqq: Player11356 = {
    name: 'qqq',
    sports: 'tennis',
};

type User00 = {
    name: string;
};

type Player111111 = User00 & {
    sports: string;
};

const qqq1: Player111111 = {
    name: 'qqq1',
    sports: 'tennis',
};

interface User1111 {
    name: string;
}

interface User1111 {
    age: number;
}

interface User1111 {
    sports: string;
}

const zzz1: User1111 = {
    name: 'zzz1',
    age: 23,
    sports: 'tennis',
};

// 220808

abstract class User12345 {
    constructor(protected firstName: string, protected lastName: string) {}
    abstract sayHi(name: string): string;
    abstract fullName(): string;
}
// new User12345() -> expected to error

class Player11235 extends User12345 {
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName}.`;
    }
}

interface User123456 {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
}

class Player222222 implements User123456 {
    constructor(
        // private firstName:string, -> expected to error
        // private lastName:string -> expected to error
        public firstName: string,
        public lastName: string
    ) {}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName}.`;
    }
}

interface Human {
    health: number;
}

class Player22222 implements User123456, Human {
    constructor(
        // private firstName:string, -> expected to error
        // private lastName:string -> expected to error
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName}.`;
    }
}

const gg33 = (user: User123456) => {
    return 'hi';
};

gg33({
    firstName: 'gg',
    lastName: '33',
    sayHi: (name) => {
        return 'sss';
    },
    fullName: () => {
        return 'xxx';
    },
});

const gg333 = (user: User123456): User123456 => {
    return {
        firstName: 'gg',
        lastName: '33',
        sayHi: (name) => {
            return 'sss';
        },
        fullName: () => {
            return 'xxx';
        },
    };
};

// 220809

type Player1563 = string;

type Player15631 = '1' | '2';

type Player11222 = {
    name: string;
};

const player11222: Player11222 = {
    name: '11222',
};

interface Player112221 {
    name: string;
}

const player112221: Player112221 = {
    name: '11222',
};

type Player11222E = Player11222 & {
    lastName: string;
};

const player11222E: Player11222E = {
    name: '11222',
    lastName: '11222E',
};

interface Player112221E extends Player112221 {
    lastName: string;
}

const player112221E: Player112221E = {
    name: '112221',
    lastName: '112221E',
};

interface Player112221A {
    name: string;
}

interface Player112221A {
    firstName: string;
}

const player221: Player112221A = {
    name: 'aaa',
    firstName: 'zzz',
};

type PlayerAA = {
    firstName: string;
};

interface PlayerAAA {
    firstName: string;
}

class User34566 implements PlayerAA {
    constructor(public firstName: string) {}
}

// 220810

interface StorageNew<T> {
    [key: string]: T;
}

class LocalStorage<T> {
    private storage: StorageNew<T> = {};

    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get('good');
stringStorage.set('hello', 'ggg');

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get('ggg');
booleanStorage.set('ggg', true);

//
