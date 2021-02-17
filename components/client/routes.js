const express = require('express')
const router = express.Router()

const multer = require('multer')
const { createClient, deleteClient, getClient, getClients, updateClient } = require('./actions')
const coverUploader = multer({ dest: 'covers/' })
const setCover = require('../../middlewares/setCover')

router.get('/', getClients)

// GET by ID
router.get('/:id', (req, res) => {
  res.send({})
})

// POST Create a Client
router.post('/', createClient)

// PUT Update a Client's info
router.put('/:id', (req, res) => {
  res.send({})
})

// DELETE by ID
router.delete('/:id', (req, res) => {
  res.send('Cliente deleted successfully!')
})

module.exports = router
