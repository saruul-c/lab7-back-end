const { Question, QuestionGroup } = require("../models");

module.exports = {
  createQuestionGroup: async (req, res) => {
    try {
      console.log(req.body);
      let { name, questions } = req.body;
      let questionGroup = await QuestionGroup({ name: name }).save();

      questions = JSON.parse(questions);
      console.log();

      let questionData = await Promise.all(
        questions.map(async (item) => {
          const { question, answers: answer, correct } = item;
          const newQuestion = await Question({
            question,
            answer,
            correct
          }).save();
          return newQuestion.save();
        })
      );
      questionGroup.questions = questionData.map((item) => item._id);
      await questionGroup.save();
      res.status(200).json(questionGroup);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Алдаа гарлаа",
        error: err
      });
    }
  },
  getQuestionGroups: async (req, res) => {
    res.status(200).json(await QuestionGroup.find().sort({ _id: -1 }));
  },
  getQuestionGroup: async (req, res) => {
    res.status(200).json(await QuestionGroup.findOne({ name: req.params.id }).populate("questions"));
  }
};
