import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Trening", day: "Feb 5. u 12:30", reminder: true },
    {
      id: 2,
      text: "Pregled kod zubara",
      day: "Feb 6. u 14:30",
      reminder: true
    },
    { id: 3, text: "Food Shopping", day: "Feb 5th at 2:30pm", reminder: false }
  ]);
  //Add Task fj
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
