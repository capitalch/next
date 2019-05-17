const express = require('express');
const server = express();

server.get('/test', (req, res) => {
	res.end('this is test');
});

server.get('/client-posts', (req, res) => {
	res.end('client-posts')
});
module.exports = server;
/*
// const compression = require('compression');
// const next = require('next');
// const fs = require('fs');
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = true; //process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
// 	const server = express();

// 	server.get('/posts', (req, res) => {
// 		console.log('posts:1');
// 		res.end('This is post')
// 		// return app.render(req, res, '/posts');
// 	});

// 	server.get('/test', (req, res) => {
// 		res.end('Test OK');
// 	});

// 	server.get('*', (req, res) => {
// 		return handle(req, res);
// 	});

// 	server.listen( (err) => {
// 		if (err) throw err;
// 		console.log(`> Ready on http://localhost:${port}`);
// 	});
// });

// module.exports = async (req, res) => {
// 	await app.prepare();

// 	console.log('posts:1')
// 	// return app.render(req, res, '/posts');
// 	res.end('This is post')
// 	console.log("die name:",__dirname);
// }
*/
