import app from "./server.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config()
const port = process.env.PORT || 8000


const client = new MongoClient(process.env.RESTREVIEWS_DB_URI)


client.connect()
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
    .then(async client => {

        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })

