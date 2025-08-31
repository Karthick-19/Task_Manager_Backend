const mon = require('mongoose');

const TaskSchema = new mon.Schema({
    name:{
        type:String,
        required:[true,'task name is a mandatory'],
        trim:true,
        minlength:[2,'Task name should be more than 2 characters'],
        maxlength:[25,'Task name should not be more than 25 characters']
    }, completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mon.model('Task',TaskSchema)