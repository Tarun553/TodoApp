const Todo = require("../model/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "All todos fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data fetched successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
