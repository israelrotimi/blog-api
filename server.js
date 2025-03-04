const express = require("express");
const cors = require("cors");
const blogsRouter = require("./routes/blogs")
const app = express();
app.use(cors());
app.use(express.json());

const port = 3000

app.get("/", (req, res) => {
  res.send("use \"/blogs\" endpoint to get the blogs");
});
app.use("/blogs", blogsRouter);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})
