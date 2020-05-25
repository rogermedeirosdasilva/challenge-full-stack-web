require('dotenv').config({
  path:
    process.env.NODE_ENV === 'teste'
      ? './src/environment/.env.test'
      : process.env.NODE_ENV === 'dev'
        ? './src/environment/.env.dev'
        : './src/environment/.env'
});

module.exports = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite",
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },
};
