const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(bodyparser);

const port = 3000

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>")
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})
