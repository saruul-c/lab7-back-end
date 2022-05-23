const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  News: mongoose.model(
    "News",
    new Schema({
      title: {
        type: String,
        required: true,
        unique: true
      },
      content: {
        type: String
      },
      image: {
        type: String
      }
    })
  ),

  QuestionGroup: mongoose.model(
    "QuestionGroup",
    new Schema({
      name: {
        type: String,
        required: true,
        unique: true
      },
      questions: [{ type: Schema.Types.ObjectId, ref: "Question" }]
    })
  ),

  Question: mongoose.model(
    "Question",
    new Schema({
      question: {
        type: String,
        required: true
        // unique: true
      },
      answer: {
        type: [String]
      },
      correct: {
        type: String
      }
    })
  )
};
