const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventStartTime: {
        type: Date,
        required: true
    },
    rolesNeeded: [{ 
        type: String,
        required: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Party", partySchema)