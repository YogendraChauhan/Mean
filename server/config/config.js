const Config = {
    SECRET:{
        JWT:"2F413F4428472B4B"
    },
    DB:{
        URI:"mongodb://optimusprime:optimusprime@cluster0-shard-00-00-u961r.mongodb.net:27017,cluster0-shard-00-01-u961r.mongodb.net:27017,cluster0-shard-00-02-u961r.mongodb.net:27017/db-WyFyspot?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",
        TEST_URI:"mongodb://localhost:27017/wyfyspot",
        PORT:3000
    },
};
module.exports = Config;