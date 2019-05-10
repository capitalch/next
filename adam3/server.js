const express = require('express')
const next = require('next')

const fs = require('fs');
const matter = require('gray-matter');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('/blogs/meta', (req, res) => {
    return app.render(req, res, '/blogs', { details:'This is blogs'})
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', [{ 'myName': "Sushant", 'myAddress': '12 J.L' }, { 'hisName': 'abcd', 'hisAddress': 'abcd' }])
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch((a) => {
  console.log(a)
})
