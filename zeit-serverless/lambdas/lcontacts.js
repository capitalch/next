const express = require('express');
const axios = require('axios');
const server = express();
server.get('/contacts', (req, res) => {
	console.log('contacts:1');
	axios
		.get('http://chisel.cloudjiffy.net/contacts/short')
		.then((d) => {
			res.json(d.data);
		})
		.catch((e) => {
			console.log(e);
		});
	// res.end('This is contacts.');
});

server.get('/users', (req, res) => {
	console.log('users:1');
	res.json([ { name: 'Sushant' }, { name: 'Prashant' }, { name: 'Pralay' } ]);
});
module.exports = server;
// server.listen(3000, (err) => {
// 	if (err) throw err;
// 	console.log('listening on port 3000 ');
// });
