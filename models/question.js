var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    level: {
      type: Number,
      unique: true
    },
    question: String,
    answer: String
});

QuestionSchema.statics.addQuestion = function(level, question, answer, callback) {
  var qs = new Question({
    level: level,
    question: question,
    answer: answer
  });
  qs.save(function(err) {
    if (err) {
      return callback(err);
    } else {
      return callback(null, qs);
    }
  });
}

QuestionSchema.statics.checkAnswer = function(level, answer, callback) {
  Question.findOne({ level: level }).exec(function(err, question) {
    if (question.answer == answer) {
      return callback(false);
    } else {
      return callback(true);
    }
  });
}

QuestionSchema.statics.getQuestion = function(level, callback) {
  Question.findOne({ level: level }).exec(function(err, level) {
    if (!level) {
      var isOver = true;
      return callback('', isOver);
    }
    var isOver = false;
    return callback(level.question, isOver);
  });
}


var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
