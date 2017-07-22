var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    level: Number,
    lastLevelOn: {
      type: Date,
      default: Date.now
    },
    p1: {
      pName: String,
      pEmail: String,
      pClass: Number
    },
    p2: {
      pName: String,
      pEmail: String,
      pClass: Number
    },
    p3: {
      pName: String,
      pEmail: String,
      pClass: Number
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
