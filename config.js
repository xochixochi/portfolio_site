let config = module.exports

config.express = {
    port: process.env.EXPRESS_PORT || 8000,
    ip: '127.0.0.1'
}

config.mongodb = {
    port: process.env.MONGODB_PORT || 27017,
    host: process.env.MONGODB_HOST || 'localhost'
}