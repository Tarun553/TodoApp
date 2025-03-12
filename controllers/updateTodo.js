const todo = require("../model/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const response = await todo.findByIdAndUpdate(id, { title, description });
    res.status(200).json({
      success: true,
      data: response,
      msg: "Updated sucessesfully",
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
    });
  }
};
