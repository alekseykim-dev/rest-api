const express = require('express');
const router = express.Router();

// Getting all
router.get('/', (req, res) => {
    res.send('Hello world')
})
// Getting One
router.get('/:id', (req, res) => {
    // req.params.id
})
// Creating one
router.post('/', (req, res) => {

})
// Updating one
router.patch('/', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})



module.exports = router