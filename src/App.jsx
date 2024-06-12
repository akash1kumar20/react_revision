import { useState } from "react";
import Add_toDo from "./components/Add_toDo";
import Display_toDo from "./components/Display_toDo";
const App = () => {
  const [taskToDisplay, setTaskToDisplay] = useState("");
  const [taskToEdit, setTaskToEdit] = useState("");

  const handleNewItem = (newTask) => {
    let task = [...taskToDisplay, newTask];
    setTaskToDisplay(task);
  };

  const handleDeleteItem = (taskName) => {
    let task = taskToDisplay.filter((task) => task != taskName);
    setTaskToDisplay(task);
  };

  const handleEditItem = (taskName) => {
    setTaskToEdit(taskName);
    let task = taskToDisplay.filter((task) => task != taskName);
    setTaskToDisplay(task);
  };
  return (
    <div className="bg-gradient-to-br from-slate-300 via-gray-500 to-slate-300 min-h-[100vh]">
      <Add_toDo onNewItem={handleNewItem} taskToEdit={taskToEdit} />
      <Display_toDo
        displayTask={taskToDisplay}
        onDeleteTaskClick={handleDeleteItem}
        onEditTaskClick={handleEditItem}
      />
    </div>
  );
};

export default App;
