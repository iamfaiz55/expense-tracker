const mongoose = require("mongoose")
const accountSchema = new mongoose.Schema({
    name: { type: String,required: true},
    amount: { type: Number,required: true},
    type: { type: String,required: true, enum:["credit", "debit"]}
}, { timestamps: true })

module.exports = mongoose.model("Account", accountSchema)