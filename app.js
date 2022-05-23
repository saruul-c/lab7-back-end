const app = require("express")();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
const { DB_URL } = require("./constants");
const { createQuestionGroup, getQuestionGroups, getQuestionGroup } = require("./routes/exam");
const { getNews, createNews, getNEwsDetail } = require("./routes/news");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(DB_URL);
mongoose.set("debug", true);

app.get("/news", getNews);
app.post("/create-news", createNews);
app.get("/news/:id", getNEwsDetail);

app.post("/create-question", createQuestionGroup);
app.get("/questionGroups", getQuestionGroups);
app.get("/questionGroupDetail/:id", getQuestionGroup);

app.listen(port, () => {
  console.log(`Сэрвер аслаа (✌ ﾟ∀ﾟ)☞ ${port} <(‾◡◝ )>`);
});
