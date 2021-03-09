const Task = require("mongoose");

const addTask = async(req, res){
    try{
        const {username, title, category} = req.body;
        let task = new Task({
            username,
            title,
            category
        })
        let result = await task.save();
        return res.status(200).send({
            message: 'Your Task Created Successfully',
            data: result
        })

    }catch(error){
        return res.status(500).send({
            message:"We received some error while creating your task, please try again"
        })
    }
}
const getTaskById = async(req, res) => {
    try{
        console.log(req.params, "REQ PARAMS");
        let id = req.params.id;
        let tasks = await Task.findById(id);
        if(!tasks){
            return res.status(400).send({
                message: "No Task found"
            });
        }
        else{
            return res.status(200).send({
                message:"Your Task fetched successfully",
                data:tasks
            })
        }
    }catch(error){
        return res.status(500).send({
            message:"Something went wrong, please try again"
        })
    }
}

const getAllTasks = async (req, res) => {
    try{
        let tasks = await Task.find();
        if (!tasks.length){
            return res.status(400).send({
                message: "No Tasks found",
            });
        }else{
            return res.status(400).send({
                message: "Your Task fetched Successfully",
                data: tasks
            });
        }
    }catch(error){
        return res.status(500).send({
            message: "We encountered some error while fetching data for you, please try again"
        });
    }
}