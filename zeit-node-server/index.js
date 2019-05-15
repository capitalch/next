const app = require('express')();

app.get('/test', (req, res) => {
	res.json({ test: 'ok' });
});

app.get('/test1', (req, res) => {
	res.json({ test1: 'ok' });
});

app.get('*', (req, res) => {
	res.send('Hello from Express.js!');
});

module.exports = app;
