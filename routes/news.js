const { News } = require("../models");

module.exports = {
  createNews: (req, res) => {
    console.log(req.body);
    const { title, content, image } = req.body;
    const news = new News({ title, content, image });
    news.save((err, news) => {
      if (err) {
        res.status(500).json({
          message: "Алдаа гарлаа",
          error: err
        });
      } else {
        res.status(201).json({
          message: "Амжилттай нэмэгдлээ",
          news
        });
      }
    });
  },
  getNews: (req, res) => {
    News.find({}, (err, news) => {
      if (err) {
        res.status(500).json({
          message: "Алдаа гарлаа",
          error: err
        });
      } else {
        res.json({
          message: "Амжилттай хандлаа",
          news
        });
      }
    });
  },
  getNEwsDetail: (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    News.findById(id, (err, news) => {
      if (err) {
        res.status(500).json({
          message: "Алдаа гарлаа",
          error: err
        });
      } else {
        res.status(200).json({
          message: "Амжилттай хандлаа",
          news
        });
      }
    });
  }
};
