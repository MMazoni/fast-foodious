module.exports = app => {
    app.post('/login', (req, res) => res.send('Vc está mandando um post'));
};