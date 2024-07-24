import React, { useState } from 'react';
import Task from './task';
import './tasklist.css';

function TaskList() {

    // here its a task for example
    const [tasks, setTasks] = useState([
        // {
        //     id: 1,
        //     text: "Doctor's Appointment",
        //     day: "Feb 5th at 2:30pm",
        //     reminder: true,
        // },
         
    ]);

    // its a empty task to add tasks
    const [newTask, setNewTask] = useState({
        text: '',
        day: '',
        reminder: false,
    });

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, reminder: !task.reminder } : task
        ));
    };

    const addTask = (e) => {
        e.preventDefault();
        const newTasks = { ...newTask};
        setTasks([...tasks, newTasks]);
        setNewTask({ text: '', day: '', reminder: false });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    return (
        <div>
            <form className="add-form" onSubmit={addTask}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" name="text" value={newTask.text} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label>Date & Time</label>
                    <input type="date" placeholder="Add Date & Time" name="day" value={newTask.day} onChange={handleChange} />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox" name="reminder" checked={newTask.reminder} onChange={(e) => setNewTask({ ...newTask, reminder: e.currentTarget.checked })} />
                </div>

                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>

            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleReminder} />
            ))}
        </div>
    );
}

export default TaskList;
