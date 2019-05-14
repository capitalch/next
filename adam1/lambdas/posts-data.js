const express = require('express');

const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
const dev = true;
// const app = next({ dev });
const app = next( dev );

const handle = app.getRequestHandler();
// const server = express();

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

async function process(req, res) {
	await app.prepare();
	const server = express();

	server.get('/posts', (req, res) => {
		console.log('server-posts');
		// res.status(200);
		res.locals.posts = posts;
		return app.render(req, res, '/posts');
		// })
	});

	server.get('/clientposts', (req, res) => {
		console.log('client-posts');
		res.status(200).json({ posts: posts });
    });
    return server
}

module.exports = async (req, res) => {
    const server = await process(req,res);
    return server;
};
