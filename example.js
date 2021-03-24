'use strict'


const cache = new (require('./cache.js')).Base();

console.log(
    cache.create(1024, 1024)
);
console.log(
    cache.setString('cool', 10)
);
console.log(
    cache.getString(10)
);

