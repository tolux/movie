import { faker } from '@faker-js/faker';

interface IMove {
  id: string;
  name: string;
  url: string;
  rate: number;
}
const moviesData = [];

function createRandomMovie(): IMove {
  return {
    id: faker.datatype.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 10 }, strategy: 'fail' }),
    url: faker.internet.url(),
    rate: faker.number.int({ min: 1, max: 5 }),
  };
}

for (let index = 0; index < 101; index++) {
  moviesData.push(createRandomMovie());
}

export { moviesData };
