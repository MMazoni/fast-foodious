module.exports = {
    HOST: "mysql",
    USER: "root",
    PASSWORD: "coleta123",
    DB: "coletas",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };