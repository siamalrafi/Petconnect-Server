const express = require("express");
const app = express();
const cors = require("cors");

// require all routes ---
const userRoutes = require("./routes/v1/user.route");

// use middleware
app.use(express.json());
app.use(cors());

// all routes ---
app.use("/api/v1/users", userRoutes);

// get main routes ---
app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
});

// export app ---
module.exports = app;
