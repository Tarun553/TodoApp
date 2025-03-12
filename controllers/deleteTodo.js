const Todo = require('../model/Todo');

exports.deleteTodo = async (req, res) => {
    try {
       const todo = await Todo.deleteMany({});
        res.status(200).json({
            success: true,
            data: todo,
            msg: "Deleted sucessesfully"
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error"
        })
    }
}