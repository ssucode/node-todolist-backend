import express, { Express } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import bodyParser from "body-parser"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(todoRoutes)

const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/${process.env.MONGO_DB}?authSource=admin&authMechanism=SCRAM-SHA-1`
const options = { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions

mongoose.connect( uri, options );
mongoose.connection
    .once('open', () =>
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
    )
    .on('error', (error) => {
        console.warn('Warning', error);
    })