const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    title: {type: String, required: true},
    img: {type: String},
    description: {type: String, required: true},
    category: {type: String},
    date: {type: Date},
    length: {type: Number, required: true},
    credits: {type: Number, required: true},
    maxParticipants: {type: Number, required: true},
    participants: [{type: Schema.Types.ObjectId, ref:'User'}],
    host: {type: Schema.Types.ObjectId,ref:'User', default: null},
    location: {type: String}  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;