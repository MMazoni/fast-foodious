module.exports = {
    HOST: "127.0.0.1",
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