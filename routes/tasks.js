var express = require('express');
const taskController = require('../controller/tasksController');
var router = express.Router();

/* GET tasks page. */
router.get('/', taskController.getTasks)

router.post('/add', taskController.addTask)

router.get('/task/:id', taskController.singleTask)

router.put('/:id', taskController.updateTask)

router.delete('/:id', taskController.deleteTask)

router.get('/pag', taskController.getPaginated)

module.exports = router;
