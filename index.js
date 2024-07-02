const app = require("express")();
const PORT = 8000 || process.env;
const bodyParser = require("body-parser");

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to get request" });
});

app.post("/", (req, res) => {
  console.log("body: ", req.body);
  res.send("Task timed out");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
