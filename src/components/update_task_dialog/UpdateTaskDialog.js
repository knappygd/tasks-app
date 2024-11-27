import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import StatusToggleButtons from '../buttons/ToggleButtons';
import './UpdateTaskDialog.css'

const UpdateTaskDialog = ({ visible, task, onHide, onUpdateTask, onDeleteTask }) => {
    const [editableTask, setEditableTask] = useState(task);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleStatusChange = (status) => {
        setEditableTask((prev) => ({
            ...prev,
            completed: status,
        }));
    };

    const handleDelete = () => {
        onDeleteTask(task.id);
        onHide();
    };

    const handleUpdate = () => {
        onUpdateTask(editableTask);
    };

    return (
        <Dialog visible={visible} onHide={onHide} draggable={false} closable={false}>
            <div className="dialog-content">
                <div className="task-dialog-header">
                    <h3 className="operation">Editar Tarea</h3>
                    <Button
                        icon="pi pi-times"
                        className="close-btn"
                        onClick={onHide}
                    />
                </div>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={editableTask.title}
                    onChange={handleInputChange}
                    className="dialog-input"
                />
                <textarea
                    id="description"
                    name="description"
                    value={editableTask.description}
                    onChange={handleInputChange}
                    className="dialog-textarea"
                />
                <div className="dialog-buttons">
                    <div className="toggle-delete">
                        <StatusToggleButtons task={editableTask} onStatusChange={handleStatusChange} />
                        <Button
                            icon="pi pi-trash"
                            className="delete-button"
                            onClick={handleDelete}
                        />
                    </div>
                    <button onClick={handleUpdate} className="done-button">
                        Listo
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default UpdateTaskDialog;
