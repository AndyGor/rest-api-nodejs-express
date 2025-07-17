import express from 'express';
import routes from './src/routes/restRoutes';

const app = express();
const PORT = 3050;

routes(app);

app.get('/', (req, res) => {
    res.send(`Node JS + Express server listening on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})