// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const bookSchema = new mongoose.Schema({
    title:        { type: String, required: true },
    description:  { type: String },
    quantity:     { type: Number, default: 1 },
    year:         { type: Number, default: 1900 },
    imageURL:     { type: String, default: "/images/nana.png"}
  })
  
// model and export: 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book
