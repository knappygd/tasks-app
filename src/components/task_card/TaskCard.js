import React from 'react';
import { Card } from 'primereact/card';
import './TaskCard.css';

const TaskCard = ({ task, onEditClick }) => {
    return (
        <Card className="task-card" onClick={onEditClick}>
            <div className="card-content">
                <div
                    className="status-circle"
                    style={{ backgroundColor: task.completed ? '#20A759' : '#D5BF44' }}
                ></div>
                <div className="card-text">
                    <h3 className="card-title">{task.title}</h3>
                    <p className="card-description">{task.description}</p>
                </div>
            </div>
        </Card>
    );
};

export default TaskCard;
