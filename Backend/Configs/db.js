const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();
const url = process.env.url;

const connection = mongoose.connect(url);

module.exports = {connection};