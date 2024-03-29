const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 9000;
const url = "mongodb://127.0.0.1:27017";

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
app.use(express.json());
try {
  con.on("open", () => {
    console.log("Connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

const router = require("./routes/student.routes");
app.use("/students", router);

app.listen(port, () => {
  console.log("Server started");
});
