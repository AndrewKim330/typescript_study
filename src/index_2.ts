// 220813

import { init } from 'myPackage'; // expected error when no d.ts file
import { exit } from 'process';

init({
    urls: 'localhost',
});

exit(1);
