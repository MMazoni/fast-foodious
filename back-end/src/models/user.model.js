module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome_usuario: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        }
    });

    return User;
};