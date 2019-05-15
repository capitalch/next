const express = require('express');
const next = require('next');
const fs = require('fs');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const files = source => fs.readdirSync(source, {
	withFileTypes: true
}).reduce((a, c) => {
	!c.isDirectory() && a.push({ title: `this is ${c.name.split('.')[0]}`, slug: c.name.split('.')[0] })
	return a
}, [])

async function arch(){
	await app.prepare()
	const server = express();
	
	server.get('/posts', (req, res) => {
		const posts = files(__dirname.concat('/docs'))
		res.locals.posts = posts;
		// res.status(200).json({ posts: posts });
		return app.render(req, res, '/posts');
	});

	// server.get('/clientposts', (req, res) => {
	// 	const posts = files(__dirname.concat('/docs'))
	// 	console.log('clientposts');
	// 	res.status(200).json({ posts: posts });
	// });

	server.get('/docs/:slug', (req, res) => {
		const slug = req.params.slug;
		res.locals.slug = slug;
		return app.render(req, res, '/post');
	})

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
}

arch()



// server.get('/posts', (req, res) => {
// 	const posts = files(__dirname.concat('/docs'))
// 	console.log('posts');
// 	res.locals.posts = posts;
// 	return app.render(req, res, '/posts');
// });

// server.get('/docs/:slug', (req, res) => {
// 	const slug = req.params.slug;
// 	res.locals.slug = slug;
// 	return app.render(req, res, '/post');
// })

// server.get('*', (req, res) => {
// 	return handle(req, res);
// });

/*
const express = require('express');
const next = require('next');
const fs = require('fs');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const files = source => fs.readdirSync(source, {
	withFileTypes: true
 }).reduce((a, c) => {
	!c.isDirectory() && a.push({title:`this is ${c.name.split('.')[0]}`, slug:c.name.split('.')[0]})
	return a
 }, [])

const posts1 = [
	{
		title: 'This is post1',
		slug: 'post1'
	},
	{
		title: 'This is post2',
		slug: 'post2'
	},
	{
		title: 'This is post3',
		slug: 'post3'
	},
	{
		title: 'This is post4',
		slug: 'post4'
	},
	{
		title: 'This is post5',
		slug: 'post5'
	}
];

app.prepare().then(() => {
	const server = express();

	server.get('/posts', (req, res) => {
		const posts = files(__dirname.concat('/docs'))
		console.log('posts');
		res.locals.posts = posts;
		return app.render(req, res, '/posts');
	});

	server.get('/clientposts', (req, res) => {
		const posts = files(__dirname.concat('/docs'))
		console.log('clientposts');
		res.status(200).json({ posts: posts });
	});

	server.get('/docs/:slug', (req, res) => {
		const slug = req.params.slug;
		res.locals.slug = slug;
		return app.render(req, res, '/post');
	})

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
*/