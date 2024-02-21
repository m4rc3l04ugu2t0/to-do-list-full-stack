require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose
    .connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit("connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.on("connected", () => {
    app.listen(process.env.PORT || 8080, () => {
        console.log("Server running: http://localhost:8080");
    });
});
