import React, { useState } from 'react';
import TaskList from './task_list/TaskList';

const TaskManager = () => {
    const [tasksUpdated] = useState(false);

    return (
        <div className="task-manager">
            <TaskList key={tasksUpdated} />
        </div>
    );
};

export default TaskManager;
