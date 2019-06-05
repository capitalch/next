const express = require('express');
const compression = require('compression');
const next = require('next');
const fs = require('fs');
const path = require('path');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = true // process.env.NODE_ENV !== 'production';
const app = next({ dev });
const matter = require('gray-matter');
const handle = app.getRequestHandler();

const folderPath = path.join(__dirname, 'docs', 'blogs');

function getBlogs(req, res, app, folderPath, client) {
	fs.readdir(folderPath, (err, files) => {
		if (err) return console.error(err);
		const blogs = files.reduce((a, c) => {
			if (!c.isDirectory) {
				const filePath = path.join(folderPath, c);
				const mtime = fs.statSync(filePath).mtimeMs;
				const { data } = matter.read(filePath);
				const cat = data.category;
				a[cat] || (a[cat] = []);
				a[cat].push({
					title: data.title
					, slug: c.split('.')[0]
					, mtime: mtime
				})
				return a
			}
		}, {})
		// console.log(blogs);
		if (client) {
			res.json(blogs)
		} else {
			res.locals.blogs = blogs;
			return app.render(req, res, '/blogs');
		}

	})

}

const robotsOptions = {
	root: __dirname + '/static/',
	headers: {
		'Content-Type': 'text/plain;charset=UTF-8',
	}
};

app.prepare().then(() => {
	const server = express()
	server.use(compression())

	server.get('/robots.txt', (req, res) => (
		res.status(200).sendFile('robots.txt', robotsOptions)
	));

	server.get('/blogs', (req, res) => {
		const folderPath = path.join(__dirname, 'docs', 'blogs');
		getBlogs(req, res, app, folderPath, req.query.client)
	});

	server.get('/:slug', (req, res) => {
		// const slug = req.params.slug || 'home';
		// res.locals.slug = slug;
		return app.render(req, res, '/');
	})

	server.get('/blog/:slug', (req, res) => {
		// const slug = req.params.slug;
		// res.locals.slug = slug;


		// const filePath = path.join(folderPath, 'blog1.md');
		// const { content, data } = matter.read(filePath);
		// res.locals.content = content;
		// res.locals.meta = data;
		return app.render(req, res, '/blog');
	})

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
}).catch((e) => console.log(e))


/*
const files = source => fs.readdirSync(source, {
	withFileTypes: true
}).reduce((a, c) => {
	!c.isDirectory() && a.push({ title: `this is ${c.name.split('.')[0]}`, slug: c.name.split('.')[0] })
	return a
}, [])

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