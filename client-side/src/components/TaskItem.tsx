import React from "react";

type Props = {
    task: Task,
    deleteTask: (id: number) => void,
    setTaskDone: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({task, deleteTask, setTaskDone}) => {
    return (
        <div className="Item">
            <div className="Item--text">
                <h1 className={task.isDone ? 'done-task' : ""}>{task.name}</h1>
                <span className={task.isDone ? 'done-task' : ""}>{task.description}</span>
            </div>

            <div className="Item--button">
                <button onClick={() => setTaskDone(task.id)} className={task.isDone ? 'hide-button' : "Item--button__done"}>完成</button>
                <button onClick={() => deleteTask(task.id)} className="Item--button__delete">删除</button>
            </div>
        </div>
    )
}

export default TaskItem;