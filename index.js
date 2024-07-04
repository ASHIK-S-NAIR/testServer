const app = require("express")();
const PORT = 8000 || process.env;
const bodyParser = require("body-parser");

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to get request" });
});

app.post("/", (req, res) => {
  console.log("body: ", req.body);
  res.json({status: 201});
});

app.post("/log", (req, res) => {
  console.log("log: ", req.body);
  res.json({msg: "log received"});
});

app.post("/ebApi", (req, res) => {
  console.log("data at EB: ", req.body);
  res.json(req.body);
});
  

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
