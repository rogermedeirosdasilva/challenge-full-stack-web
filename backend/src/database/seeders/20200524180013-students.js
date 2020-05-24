'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [{
      ra: '000326',
      name: 'John Connor',
      email: 'j.connor@future.net',
      cpf: '12345678901'
    },
    {
      ra: '000120',
      name: 'Ozzy Ousbourn',
      email: 'ozzy@bsabath.com',
      cpf: '00032536202'
    },
    {
      ra: '030923',
      name: 'Bruce Dickinson',
      email: 'bd@ironmaden.com',
      cpf: '70362536192'
    },    
    {
      ra: '003031',
      name: 'Maria Silva',
      email: 'maria@vuol.com',
      cpf: '65889601254'
    },
    {
      ra: '000065',
      name: 'Charles Darwin',
      email: 'charles@naturalevolution.com',
      cpf: '00000012501'
    },
    {
      ra: '157802',
      name: 'Altemar Silva',
      email: 'altemar@vuol.com',
      cpf: '70362536192'
    },
    {
      ra: '000378',
      name: 'Bruno Marrone',
      email: 'bm@vuol.com',
      cpf: '30250299941'
    },
    {
      ra: '002452',
      name: 'Janet Jackson',
      email: 'jj@aol.com',
      cpf: '10355566192'
    }], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('students', null, {}),
};
