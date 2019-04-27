'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    let fakeData = [];

    for (let i = 0; i < 10; i++) {
      fakeData.push({
        title: `${faker.name.firstName()} ${faker.name.lastName()}`,
        technologies: faker.internet.protocol(),
        budget: faker.commerce.price(10000, 1000000, null, '$'),
        description: faker.name.jobDescriptor(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('Posts', fakeData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
