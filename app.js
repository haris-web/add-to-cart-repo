const express = require("express");
const cors = require("cors");
const router = require("./router");
require("./Connecting");

const Port = 8080;

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use your router
app.use(router);

app.listen(Port, async () => {
    console.log("Server is running on ", Port);
});
