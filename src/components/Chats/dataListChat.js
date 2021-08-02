import faker from 'faker';

export const listChat = Array.from({
    length: 5,
}).map(() => ({
    id: faker.datatype.number(),
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
}));
