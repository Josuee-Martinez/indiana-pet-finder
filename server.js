require("dotenv").config();
const express = require("express");
const app = express();

const authTokenController = require("./controllers/authTokenController");
const petDataController = require("./controllers/petDataController");

app.use(require("./middleware/headers"));

app.use("/api/authtoken", authTokenController);
app.use("/api/petdata", petDataController);

app.listen(5000, console.log("running"));
