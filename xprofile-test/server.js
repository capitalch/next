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

	server.get('/blog/:slug', (req, res) => {
		const slug = req.params.slug;
		const folderPath = path.join(__dirname, 'docs','blogs');
		const filePath = path.join(folderPath,`${slug}.md`);
		const content = fs.readFileSync(filePath, 'utf8').split('---')[2]; //to omit front matter
		res.locals.content = content;
		const { data } = matter.read(filePath);
		res.locals.title = data.title;
		return app.render(req, res, '/blog');
	})

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
})
.catch((e) => {
	console.log(e);
})


/*

*/