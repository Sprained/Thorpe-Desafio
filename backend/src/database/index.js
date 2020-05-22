const mongoose = require('mongoose');

class Database{
    constructor(){
        this.mongo();
    }

    mongo(){
        this.mongoConnection = mongoose.connect(
            'mongodb+srv://node:node@cluster1-cbqdn.mongodb.net/test?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }
        )
    }
}

module.exports = new Database();