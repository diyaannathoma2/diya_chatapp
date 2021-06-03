const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.0errl.mongodb.net/CHATAPP?retryWrites=true&w=majority');
// mongodb://localhost:27017/chatapp
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email  : String,
    uname : String,
    password : String,
  
});

var Userdata = mongoose.model('user', NewUserSchema);             

module.exports = Userdata;