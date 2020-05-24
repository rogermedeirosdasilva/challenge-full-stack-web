'use strict';
module.exports = (sequelize, types) => {
  const Student = sequelize.define('students', {
    ra: {
      type: types.STRING(10),
      field: "ra",
      primaryKey: true,
    },
    name: {
      type: types.STRING(100),
      allowNull: false,
    },
    email: {
      type: types.STRING(100),
      allowNull: false,
    },
    cpf: {
      type: types.STRING(11),
      allowNull: false,
    },  
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};