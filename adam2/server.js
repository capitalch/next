const express = require('express');
const compression = require('compression');
const next = require('next');
const fs = require('fs');
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const getFiles = (source) =>
	fs
		.readdirSync(source, {
			withFileTypes: true
		})
		.reduce((a, c) => {
			!c.isDirectory() && a.push({ title: `this is ${c.name.split('.')[0]}`, slug: c.name.split('.')[0] });
			return a;
		}, []);

app.prepare().then(() => {
	const server = express();
	server.use(compression())
	server.get('/posts', (req, res) => {
		const posts = getFiles(__dirname.concat('/docs'));
		console.log('posts');
		res.locals.posts = posts;
		return app.render(req, res, '/posts');
	});

	server.get('/clientposts', (req, res) => {
		const posts = getFiles(__dirname.concat('/docs'));
		console.log('clientposts');
		res.status(200).json({ posts: posts });
	});

	server.get('/docs/:slug', (req, res) => {
		const slug = req.params.slug;
		res.locals.slug = slug;
		return app.render(req, res, '/post');
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
