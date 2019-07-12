const express = require('express');
const moment = require('moment');
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
				let { data, content } = matter.read(filePath);
				content = content.split(' ').slice(0, 25).join(' ');
				const birthTime = fs.statSync(filePath).birthtime;
				const createdOn = data.createdOn || moment(birthTime).format('YYYY-MM-DD');
				const cat = data.category;
				a[cat] || (a[cat] = []);
				a[cat].push({
					title: data.title
					, slug: c.split('.')[0]
					, createdOn: createdOn
					, content: content
				})
				return a
			}
		}, {});
		console.log(blogs);
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

const sitemapOptions = {
	root: __dirname + '/static/',
	headers: {
		'Content-Type': 'text/xml;charset=UTF-8',
	}
};

const faviconOptions = {
	root: __dirname + '/static/'
};

app.prepare().then(() => {
	const server = express()
	server.use(compression())

	server.get('/robots.txt', (req, res) => (
		res.status(200).sendFile('robots.txt', robotsOptions)
	));

	server.get('/sitemap.xml', (req, res) => (
		res.status(200).sendFile('sitemap.xml', sitemapOptions)
	));

	server.get('/favicon.ico', (req, res) => (
		res.status(200).sendFile('favicon.ico', faviconOptions)
	));

	server.get('/blogs', (req, res) => {
		const folderPath = path.join(__dirname, 'docs', 'blogs');
		getBlogs(req, res, app, folderPath, req.query.client)
	});


	server.get('/:slug', (req, res) => {
		const slug = req.params.slug;
		const client = req.query.client;
		const folderPath = path.join(__dirname, 'docs');
		const filePath = path.join(folderPath, 'skills.json');
		if (slug === 'skillset') {
			const skills = fs.readFileSync(filePath, 'utf8');
			if (client) {
				res.status(200).json({ skills: skills })
			} else {
				res.locals.skills = skills;
			}
		}
		return app.render(req, res, '/');
	})

	server.get('/blog/:slug', (req, res) => {
		const slug = req.params.slug;
		const folderPath = path.join(__dirname, 'docs', 'blogs');
		const filePath = path.join(folderPath, `${slug}.md`);
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