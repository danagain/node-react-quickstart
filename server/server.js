"use strict";
const express = require('express'),
router = require("./routes/manager")(),
app = express();

// Routes
app.use("/manager", router);


app.get('/', (req, res) => {
    var a = {"testing": "TESTING"};
    res.json(a);
});

// Catch all 404's
app.get("*", (req, res) => {
    res.status(404).json([{ "Not found": true }]);
  });

const server = app.listen(5000, () => {
    console.log("listening on port 3000");
});
  
module.exports = server;