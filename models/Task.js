const {Schema, model} = require('mongoose')

const TaskSchema = new Schema({
    title:{
        type:String, 
        trim:true, 
        required: true
    }, 
    priority:{
        type:String, 
        enum:['low', 'medium', 'heigh'],
        required: true, 
    }, 
    isCompleted:{
        type:Boolean, 
        default:false
    }
}, {timestamps:true})


module.exports  =model('Task', TaskSchema)