const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, addTask, deleteTaskById } = require('../controllers/taskController');

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.get('/tasks', addTask);
router.get('/tasks/:id', deleteTaskById);

module.exports = router;
