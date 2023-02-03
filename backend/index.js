import app from "./server";
import mongodb from 'mongodb';
import dotenv from 'dotenv';

//to access .env file
dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

//connect the database using a URL
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse: true
    })
    .catch(err => {
        console.error(err.stack);
        process.exitCode = 1;
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`Connected to db & listening on PORT`)
        })
    })


