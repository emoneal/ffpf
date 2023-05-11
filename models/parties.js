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
    players: {
        type: Array,
        
            name: {
                type: String,
                default: Schema.Types.ObjectId,
                required: true
            },
            job: {
                type: String,
                
            },
            lodestone: {
                type: String,
            }
        },
    rolesNeeded: {
        type: Array,
        default: "any"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Party", partySchema)