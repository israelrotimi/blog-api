const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>")
  console.log("connected to root")
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})
