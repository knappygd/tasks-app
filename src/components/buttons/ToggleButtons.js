import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import './ToggleButtons.css';

const StatusToggleButtons = ({ task, onStatusChange }) => {
    const [status, setStatus] = useState(task.completed ? 'completed' : 'awaiting');

    useEffect(() => {
        setStatus(task.completed ? 'completed' : 'awaiting');
    }, [task]);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        onStatusChange(newStatus === 'completed');
    };

    return (
        <div className="status-toggle-buttons">
            <Button
                label="Pendiente"
                onClick={() => handleStatusChange('awaiting')}
                className={`awaiting ${status === 'awaiting' ? 'selected' : ''}`}
            />
            <Button
                label="Completado"
                onClick={() => handleStatusChange('completed')}
                className={`completed ${status === 'completed' ? 'selected' : ''}`}
            />
        </div>
    );
};

export default StatusToggleButtons;
