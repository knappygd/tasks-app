import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './AddTaskDialog.css'

const AddTaskDialog = ({ visible, task, onHide, onUpdateTask }) => {
    const [editableTask, setEditableTask] = useState(task);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        onUpdateTask(editableTask);
    };

    return (
        <Dialog visible={visible} onHide={onHide} draggable={false} closable={false}>
            <div className="dialog-content">
                <div className="task-dialog-header">
                    <h3 className="operation">Nueva Tarea</h3>
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
                <div className="dialog-actions">
                    <button onClick={handleUpdate} className="add-button">
                        Agregar
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default AddTaskDialog;
