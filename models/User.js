const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleID: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        default: 0
    },
    name: {type:String, required:true}
})

mongoose.model('users', userSchema);