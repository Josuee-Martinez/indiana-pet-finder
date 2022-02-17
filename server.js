const express = require("express");
const app = express();
const petDataController = require("./controllers/petDataController");

app.use("/api/petdata", petDataController);

app.listen(5000, console.log("running"));
