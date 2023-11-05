
const mongoose = require('mongoose');
const teamSchema = mongoose.Schema(
    {
        teamName: {
            type: String,
            unique: true
        },
        teamLeaderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
        teamNumber: {
            type: Number
        },
        leaderName: {
            type: String
        },
        leaderEmail: {
            type: String
        },
        teamID: {
            type: mongoose.Schema.Types.ObjectId
        },
        isQualified: {
            type: Boolean
        },
        currentRound: {
            type: String
        },
        members: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Users",
            },
        ],
    },
    { collection: "TeamModel" }
);

module.exports = mongoose.model("TeamModel", teamSchema);
