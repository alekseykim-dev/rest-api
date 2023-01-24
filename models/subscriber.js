const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        defaul: Date.now
    }
})

module.export = mongoose.model('Subscriber', subscriberSchema)

// model interacts directly with database