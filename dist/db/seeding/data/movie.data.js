"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesData = void 0;
const faker_1 = require("@faker-js/faker");
const moviesData = [];
exports.moviesData = moviesData;
function createRandomMovie() {
    return {
        id: faker_1.faker.datatype.uuid(),
        name: faker_1.faker.word.noun({ length: { min: 5, max: 10 }, strategy: 'fail' }),
        url: faker_1.faker.internet.url(),
        rate: faker_1.faker.number.int({ min: 1, max: 5 }),
    };
}
for (let index = 0; index < 101; index++) {
    moviesData.push(createRandomMovie());
}
//# sourceMappingURL=movie.data.js.map