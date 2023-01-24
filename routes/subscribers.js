const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err){
        res.status(500).json({ message: err.message })
            // 500 -server error
    }
})
// Getting One
// router.get('/:id', async (req, res) => {
//     const subscriber = new Subscriber ({
//         name: req.body.name,
//         subscribedToChannel: req.body.subscribedToChannel
//     })
//     try {
//         const newSubscriber = await subscriber.save()
//         res.status(201).json(newSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message})

//     }
//     // res.send(req.params.id)
//     // req.params.id
// })
// Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber ({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message})

    }

})
// Updating one
router.patch('/', (req, res) => {
// updates only what will user pass
})
// Deleting one
router.delete('/:id', (req, res) => {

})



module.exports = router