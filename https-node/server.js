// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();

var options = {
    key: fs.readFileSync('44530095_sushantagrawal.com.key'),
    cert: fs.readFileSync('44530095_sushantagrawal.com.cert')
  };

// Certificate
const privateKey = fs.readFileSync('44530095_sushantagrawal.com.key', 'utf8');
const certificate = fs.readFileSync('44530095_sushantagrawal.com.cert', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');
const credentials = {
	key: privateKey,
    cert: certificate
    // ,ca: ca
};
app.use((req, res) => {
	res.send('Hello there !');
});
// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);
httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});
httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});