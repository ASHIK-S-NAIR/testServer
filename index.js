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

app.post("/callflow", (req, res) => {
  console.log("callflow api triggered");
  return res.json({
  "status": false,
  "callflow": [
    {
      "WORKING_HOUR": {
        "config": {
          "all": [
            {
              "from": "0000",
              "to": "2359"
            }
          ]
        },
        "true": [
          {
            "CONNECT_GROUP": {
              "statergy": "PRIORITY",
              "participants": [
                {
                  "name": "",
                  "number": "+918281905203",
                  "timeout": "60"
                }
              ]
            }
          },
          {
            "PROMPT": {
              "file": "no_answer"
            }
          },
          {
            "HANGUP": "true"
          }
        ],
        "false": [
          {
            "PROMPT": {
              "file": "telecom_638760eb55590"
            }
          },
          {
            "HANGUP": "true"
          }
        ]
      }
    },
    {
      "EXTRA_PARAMS": {
        "CustomerNumber": 8281905203,
        "AgentNumber": 8593048964,
        "RequestId": 415
      }
    }
  ],
  "messages": {
    "AgentNumber": [
      "The agent number field is required."
    ]
  }
});
});
  

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
