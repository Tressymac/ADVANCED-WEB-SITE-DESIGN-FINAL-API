const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId, Int32 } = require('mongodb');

//Create Schema 
const StatesSchema = new Schema ({
    _id: {
        type: ObjectId,
        required: true
    },
    states: {
        type: Array,
        required: true
    }
    }
);

mongoose.model('states', StatesSchema);