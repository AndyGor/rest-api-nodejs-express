import express from 'express';

const app = express();
const PORT = 3050;

app.get('/', (req, res) => {
    res.send(`Node JS + Express server listening on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})