const express = require('express');
const next = require('next');
const fs = require('fs');
const matter = require('gray-matter');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const posts = [
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
		res.locals.posts = posts;
		return app.render(req, res, '/posts');
	});

	server.get('/client-posts', (req, res) => {
		res.status(200).json({ posts: posts });
	});

	server.get('/post/:slug', (req, res) => {
    const slug = req.params.slug;
		const {data,content} = matter.read(`./posts/${slug}.md`);
		const html = '<b>Hi this is html</b>';
    return app.render(req, res, '/post' , {data,content, html});
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});

/*
server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })
*/
