const app = require("express")();
const PORT = 8000 || process.env;
const bodyParser = require("body-parser");

app.use(bodyParser.json())

app.get("/", (req, res) => {
  return res.json({ msg: "Welcome to get request" });
});

app.post("/", (req, res) => {
  console.log("body: ", req.body);
  return res.json({status: 201});
});

app.post("/log", (req, res) => {
  console.log("log: ", req.body);
  return res.json({msg: "log received"});
});

app.post("/ebApi", (req, res) => {
  console.log("data at EB: ", req.body);
  return res.json(req.body);
});
  

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
