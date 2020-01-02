const mongoose = require("mongoose");

let userSchecma = new mongoose.Schema({ fname: "string", email: "string" });

module.exports = mongoose.model("user", userSchecma);
