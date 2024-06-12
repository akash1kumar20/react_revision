import { useEffect, useState } from "react";

const Add_toDo = ({ onNewItem, taskToEdit }) => {
  //to use a non-destructed value, use {props.onNewItem} in b/w ();
  const [newTask, setNewTask] = useState("");
  function handleTaskAdded(e) {
    setNewTask(e.target.value);
  }

  function handleButtonClicked() {
    onNewItem(newTask);
    setNewTask("");
  }

  useEffect(() => {
    document.querySelector("#task").value = taskToEdit;
  }, [taskToEdit]);

  return (
    <center>
      <h1 className="text-5xl pt-4 pb-8 text-red-900 underline ">ToDo App</h1>
      <div className="pb-6">
        <div className="flex gap-6 items-center justify-center">
          <div className="border-2 border-slate-500 rounded-md">
            <input
              id="task"
              type="text"
              value={newTask}
              placeholder="Add ToDo here..."
              onChange={(e) => handleTaskAdded(e)}
              required
              className="py-[10px] pe-10 ps-4 rounded-md w-96"
            ></input>
          </div>
          <button
            className="bg-green-400 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold uppercase"
            onClick={() => handleButtonClicked()}
          >
            Add
          </button>
        </div>
      </div>
    </center>
  );
};

export default Add_toDo;
