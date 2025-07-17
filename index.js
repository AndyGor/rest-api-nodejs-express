import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/restRoutes';

const app = express();
const PORT = 3050;

// Mongo DB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/simpledb');

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Node JS + Express server listening on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})