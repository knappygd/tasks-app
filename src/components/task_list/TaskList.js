import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../../api/api';
import TaskCard from '../task_card/TaskCard';
import UpdateTaskDialog from '../update_task_dialog/UpdateTaskDialog';
import AddTaskDialog from '../add_task_dialog/AddTaskDialog';
import 'primereact/resources/primereact.min.css';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Manages dialog visibility and the task being edited
    const [selectedTask, setSelectedTask] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [addDialogVisible, setAddDialogVisible] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const tasksData = await getTasks();
                setTasks(tasksData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);


    // handleUpdateTask optimistically updates the tasks to avoid waiting until the task updates in the API.
    // This way, the dialog closes immediately after triggering the update,
    // while it keeps updating in the background.
    // If updating fails, it reverts to its previous state. 
    const handleUpdateTask = async (updatedTask) => {
        try {
            // Optimistically update the task
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === updatedTask.id ? updatedTask : task
                )
            );

            setDialogVisible(false);
            setSelectedTask(null);

            // Update the task in the backend
            await updateTask(updatedTask.id, updatedTask);

            // Re-fetch the tasks to ensure the latest data
            const updatedTasks = await getTasks();
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error updating task:', error);

            // Revert the optimistic update if necessary
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === updatedTask.id ? task : prevTasks.find(t => t.id === updatedTask.id)
                )
            );
        }
    };


    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);

            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenDialog = (task) => {
        setSelectedTask(task);
        setDialogVisible(true);
    };

    const handleCloseDialog = () => {
        setDialogVisible(false);
        setSelectedTask(null);
    };

    // handleAddTask follows the same logic as handleUpdateTask for performing operations in the background.
    const handleAddTask = async (newTask) => {
        try {
            setAddDialogVisible(false);

            await addTask(newTask);

            const updatedTasks = await getTasks();
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };


    const handleOpenAddDialog = () => {
        setAddDialogVisible(true);
    };

    const handleCloseAddDialog = () => {
        setAddDialogVisible(false);
    };

    return (
        <div className="task-list-container">
            <h3 className="task-list-title">Tareas</h3>

            {loading ? (
                <div className="loading">
                    <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
                    <h3>Loading tasks...</h3>
                </div>
            ) : (
                <>
                    {tasks.length === 0 ? (
                        <div className="no-tasks">
                            <i className="pi pi-info-circle p-mr-2" style={{ fontSize: '2rem' }}></i>
                            <h2 className="title">No hay tareas agregadas</h2>
                        </div>
                    ) : (
                        [...tasks].reverse().map((task) => ( // reverse() shows the latest tasks on top
                            <TaskCard
                                key={task.id}
                                task={task}
                                onUpdateTask={handleUpdateTask}
                                onDeleteTask={handleDeleteTask}
                                onEditClick={() => handleOpenDialog(task)}
                            />
                        ))
                    )}
                </>
            )}

            {selectedTask && selectedTask && (
                <UpdateTaskDialog
                    visible={dialogVisible}
                    task={selectedTask}
                    onHide={handleCloseDialog}
                    onUpdateTask={handleUpdateTask}
                    onDeleteTask={handleDeleteTask}
                />
            )}

            <div className="task-list-footer">
                <div className="new-task" onClick={handleOpenAddDialog}>
                    <p>Nueva Tarea</p>
                </div>
            </div>

            <AddTaskDialog
                visible={addDialogVisible}
                task={{ title: '', description: '', completed: false }}
                onHide={handleCloseAddDialog}
                onUpdateTask={handleAddTask}
            />
        </div>
    );
};

export default TaskList;
