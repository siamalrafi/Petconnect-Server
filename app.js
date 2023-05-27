const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// get main routes ---
app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
});

// export app ---
module.exports = app;
