const Task = require("../models/task")

const getTasks = async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json({ error: false, tasks: tasks })
}
const addTask = async (req, res) => {
    try {
        const task = req.body.task
        if (task) {
            const newTask = await Task.create({ task })
            res.status(200).json({ error: false, message: newTask })
        } else {
            res.status(400).json({ error: true, message: 'Task is not right' })
        }
    }
    catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
const singleTask = async (req, res) => {
    const task = await Task.findByPk(req.params.id)
    if (task) {
        res.status(200).json({ error: false, value: task })
    } else {

        res.status(404).json({ error: true, message: "not found" })
    }
}

const updateTask = async (req, res) => {

    const task = await Task.findByPk(req.params.id)
    const updates = req.body
    if (task) {
        task.update(updates)
        res.status(200).json({ error: false, message: "Task is updated" })
    } else {

        res.status(404).json({ error: true, message: "not found" })
    }
}
const deleteTask = async (req, res) => {
    const id = req.params.id
    const task = await Task.findByPk(id)
    if (task) {
        const deleted = await Task.destroy({
            where: { id }
        })
        res.status(200).json({ error: false, message: `${deleted} task deleted` })

    } else {
        res.status(404).json({ error: true, message: "Not found" })
    }

}
const getPaginated = async (req, res) => {
    const totalROws = await Task.count();
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)
    const lastPage = Math.ceil(totalROws / limit);
    const offset = (page - 1) * limit
    if (page > lastPage) {
        res.status(404).json({ error: true, message: "No more Data" })
    }
    try {
        const { count, rows: tasks } = await Task.findAndCountAll({
            limit: limit,
            offset: offset,

        });
        res.status(200).json({ error: false, tasks: tasks })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }


    //res.status(200).json({error:false,message:`total rows are ${totalROws} and limit is ${limit} \nthat makes total pages ${lastPage} and required page is ${page}`})
}
module.exports = {
    getTasks,
    addTask, singleTask, updateTask, deleteTask,
    getPaginated,
}