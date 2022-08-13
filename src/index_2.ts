// 220813

import { init, exit } from 'myPackage'; // expected error when no d.ts file

init({
    urls: 'localhost',
});

exit(1);
