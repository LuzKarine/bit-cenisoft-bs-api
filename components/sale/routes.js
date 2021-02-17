const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createSale, deleteSale, getSale } = require('./actions')
const coverUploader = multer({ dest: 'covers/' })
const setCover = require('../../middlewares/setCover')


router.get('/:id', getSale)

router.post('/', createSale)


router.delete('/:id', (req, res) => {
    res.send('Sale deleted successfully!')
})

router.delete('/:id', deleteSale)

module.exports = router