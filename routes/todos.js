const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");

router.post("/createTodo", createTodo);
module.exports = router;

const { getTodos } = require("../controllers/getTodo");
router.get("/getTodos", getTodos);
module.exports = router;

const { getTodoById } = require("../controllers/getTodo");
router.get("/getTodo/:id", getTodoById);
module.exports = router;

const { updateTodo } = require("../controllers/updateTodo");
router.put("/updateTodo/:id", updateTodo);
module.exports = router;

const { deleteTodo } = require("../controllers/deleteTodo");
router.delete("/deleteTodo", deleteTodo);
module.exports = router;
