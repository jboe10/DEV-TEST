const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello world from app.js');
});

app.listen(port, () => console.log(`Exmaple app listening of port ${port}!`));
