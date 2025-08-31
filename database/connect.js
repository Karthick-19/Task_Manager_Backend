const mon = require('mongoose');

const connectDb = async (url)=>{
    try{
        const connect = await mon.connect(url);
        console.log('Database connected',connect.connection.host,connect.connection.name);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;