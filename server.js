const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.static("website"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

/* Global API Variables */
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Post Route
app.post("/", async function (req, res) {
  const query = req.body.urlInput;
  const url = baseUrl + `${API_KEY}&of=json&lang=en&url=${query}`;
  const options = {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  try {
    let response = await fetch(url, options);
    response = await response.json();

    const agreement = response.agreement;
    const confidence = response.confidence;
    const scoreTag = response.score_tag;
    const subjectivity = response.subjectivity;
    const irony = response.irony;
    res.status(200);

    res.render("index", {
      agreementRes: agreement,
      confidenceRes: confidence,
      scoreTagRes: scoreTag,
      subjectivityRes: subjectivity,
      ironyRes: irony,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `Internal Server Error` });
  }
});

// Setup Server
const PORT = process.env.PORT || 8000;
app.listen(PORT);
