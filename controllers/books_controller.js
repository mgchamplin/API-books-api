const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

books.get('/seed', (req, res) => {
    console.log("SEED IT")
})

// Index:
books.get('/', (req, res) => {
    console.log("GET /")
    Book.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(err => {
            console.log('GET ERROR', err)
            res.json('ERROR GETTING BOOKS')
      })
})

// Show:
books.get('/:id', (req, res) => {
    console.log("SHOW TIME: " + id)

    Book.findById(req.params.id)
        .then(book => {
            res.json(book)
    })
    .catch(err => {
        console.log('err2', err)
        res.json('error404')
  })
})

books.post('/', (req, res) => {
    console.log("POST TIME: ")

    Book.create(req.body)
    .then(() => {
        res.json(req.body)
    })
    .catch(err => {
        res.json("POST ERROR")
    })
  })

books.put('/:id', (req, res) => {
    console.log("PUT /:id")
  
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(bookFound => {
        console.log("BOOK UPDATED")
        res.json(bookFound)
    })
    .catch (err => {
      console.log('err3', err)
      res.json("PUT FAILED")
    })
  })

books.delete('/:id', (req, res) => {
    console.log("DELETE /:id")
  
    Book.findByIdAndDelete(req.params.id)
    .then (bookFound => {
        res.json("BOOK DELETE!")
    })
    .catch (err => {
      console.log('err',err)
      res.json("DELETE FAILED")
    })
  })

module.exports = books