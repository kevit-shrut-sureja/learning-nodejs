import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(3001, () => {
	console.log(`server listing on 3001`);
});
