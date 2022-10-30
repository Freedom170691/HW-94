const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idValidator = require('mongoose-id-validator');

const DevelopmentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

DevelopmentsSchema.plugin(idValidator, { message : 'Bad ID value for {PATH}' });
const Developments = mongoose.model('Developments', DevelopmentsSchema);

module.exports = Developments;