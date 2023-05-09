const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type:String,
    required:true
  },
  lastName: {
    type:String,
    required:true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
},
{
  versionKey: false,
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
