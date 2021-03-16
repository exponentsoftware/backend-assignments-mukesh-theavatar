const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is needed!"]
    }, 
    title:{
        type:String,
        required:[true,"Title is needed!"]
        },
        status:{
            type: Boolean,
            default: false
        },
        category:{
            type: String,
            enum:["Work", "Hobby", "Task"],
            required: [true, "category need to be added"]
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        updatedAt:{
            type: Date,
            default: Date.now
        }
},
{ timestamp: true });

console.log("\n Available task categories are:"+"\n");

module.exports = mongoose.model('task',taskSchema);

//module.exports = todo;
