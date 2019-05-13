const express = require('express');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
app.prepare();
const handle = app.getRequestHandler();
const server = express();
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
// app.prepare().then(() => {
// server.get('/posts', (req, res) => {
//     console.log('server-posts');
//     res.status(200);
//     res.locals.posts = posts;
//     return app.render(req, res, '/posts');
// })

// server.get('/clientposts', (req, res) => {
//     console.log('client-posts');
//     res.status(200).json({ posts: posts });
// });

// server.get('*', (req, res) => {
//     console.log('*');
//     return handle(req, res);
// });

// module.exports = server;

// })

server.get('/posts', (req, res) => {
    console.log('server-posts');
    // console.log('app is:', app);
    // res.status(200);
    // app.prepare().then(()=>{
    res.status(200)
    res.locals.posts = posts;
    return app.render(req, res, '/posts');
    // })
})

server.get('/clientposts', (req, res) => {
    console.log('client-posts');
    res.status(200).json({ posts: posts });
});

server.get('*', (req, res) => {
    console.log('*');
    return handle(req, res);
});

module.exports = server;

// module.exports = (req, res) => {
//     console.log('clientposts');
//     res.status(200).json({ posts: posts });
// }