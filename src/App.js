import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import ShowTableData from './components/ShowTableData';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (event) => {
      setTaskTitle(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    if(!taskTitle) {
      alert("The input field is empty");
      return ;
    }
    setTasks(prevTask => [...prevTask, {completed: false, title: taskTitle,  id: new Date().getTime()}])
    setTaskTitle('');
    alert("Task added successfully!")
  }

  const handleCheck = (id) => {
    setTasks(prevTask => prevTask.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do App</h1>
        <form>
       <Input id="task" name="task" value={taskTitle} type="text" inputTitle="Task title" handleChange={handleChange} />
       <Button title="Add Task" handleClick={handleClick}/>
       </form>
       
       <ShowTableData tableData={tasks} handleCheck={handleCheck} >
        <h2>Task List</h2>
       </ShowTableData>
      </header>
    </div>
  );
}

export default App;
