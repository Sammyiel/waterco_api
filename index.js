import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import jwt from 'jsonwebtoken';

const app = express();

dotenv.config()

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, UPDATE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);


app.listen(port, () => {
    console.log(`Our Book Club API is now available on port ${port}`)
})

app.post('/login', (req, res) => {
    const username = req.params.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.AUTH_KEY)
    res.json({ accessToken: accessToken })
})

export function authenticate(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.AUTH_KEY);
        next();
    } catch (err) {
        res.status(401).json({
            status: 'failed',
            message: "Authentication Failed: Incorrect Auth Token."
        })
    }
}