const customExpress = require('./config/customExpress');

const app = customExpress();

require('./database');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}.`);
});

