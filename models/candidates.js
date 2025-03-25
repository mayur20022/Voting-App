const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    paty: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    vote: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            votedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    voteCount: {
        type: Number,
        default: 0
    }
})

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;