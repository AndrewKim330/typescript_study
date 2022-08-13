// 220813

import { init, exit } from 'myPackage'; // expected error when no d.ts file

init({
    urls: 'localhost',
});

exit(1);

import { init2, exit2 } from './myPackage2';

init2({ urls: 'localhost', debug: true });

exit2(1);
