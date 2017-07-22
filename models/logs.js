var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogsSchema = new Schema({
    username: String,
    level: Number,
    answer: String,
    time: {
      type: Date,
    }
});


var Logs = mongoose.model('Logs', LogsSchema);
module.exports = Logs;
