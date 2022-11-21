const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors())

const api = require("./api.json");


app.get('/', (req, res) => {
    res.json(api)
})

app.listen(port, () => {
    console.log("server is on 1000")
})
