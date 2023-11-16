import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTask, deleteTask, getTaskList, setTaskDone } from './apis';
import TaskCreator from './components/TaskCreator';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskList().then(p => setTasks(p.data));
  }, []);

  const handleAddTask = (e: React.FormEvent, formData: Task): void => {
    addTask(formData).then(p => setTasks([...tasks, p.data]));
  }

  const handleDeleteTask = (id: number): void => {
    deleteTask(id).then(p => {
        let deleteTaskIndex = tasks.findIndex(y => y.id == id);
        let newTasks = [...tasks];
        newTasks.splice(deleteTaskIndex, 1);
        setTasks(newTasks);
    })
  }

  const handleSetTaskDone = (id: number): void => {
    setTaskDone(id).then(p => {
      let doneTaskIndex = tasks.findIndex(y => y.id == id);
      tasks[doneTaskIndex].isDone = true;
      setTasks([...tasks]);
    })
  }

  return (
    <main className='App'>
      <h1>任务管理</h1>
      <TaskCreator addTask={handleAddTask}/>
      <div className='Item'>
        <h1>全部任务</h1>
      </div>
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={handleDeleteTask}
          setTaskDone={handleSetTaskDone}
        />
      ))}
    </main>
  );
}

export default App;
