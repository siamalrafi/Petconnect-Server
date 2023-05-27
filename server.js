const DBConnect = require("./utilities/dbConnect");

const app = require("./app");

// database connection ---
DBConnect();

// ---------- Server PORT ----------
const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`App is running on port http://localhost:${port}`.yellow.bold);
});
