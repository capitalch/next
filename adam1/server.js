const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    return res.json({
        name:'sush',
        address:'12 J.L'
    })
	// res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
