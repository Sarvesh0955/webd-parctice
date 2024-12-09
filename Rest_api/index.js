const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // You can choose any available port

// Middleware to parse JSON data
app.use(bodyParser.json());

// Sample data (tasks array)
let tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
];

// GET /tasks - Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST /tasks - Create a new task
app.post('/tasks', (req, res) => {
    const { title, completed } = req.body;
    const newTask = { id: tasks.length + 1, title, completed };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Update a task by ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
        taskToUpdate.title = title || taskToUpdate.title;
        taskToUpdate.completed = completed || taskToUpdate.completed;
        res.json(taskToUpdate);
    } else {
        res.status(404).send('Task not found');
    }
});

// DELETE /tasks/:id - Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.send('Task deleted successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
