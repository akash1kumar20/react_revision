import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const Display_toDo = (props) => {
  let toDo = props.displayTask || [];
  let deleteTask = props.onDeleteTaskClick;
  let editTask = props.onEditTaskClick;

  function handleDeleteTask(task) {
    deleteTask(task);
  }

  function handleEditTask(task) {
    editTask(task);
  }

  return (
    <center>
      <div className=" border-t-2 border-white font-semibold text-xl py-2 md:px-72 px-6">
        {toDo.length === 0 && (
          <p className="uppercase text-gray-900">All task completed, Enjoy!</p>
        )}
        {toDo.map((task) => (
          <div
            className="flex justify-between items-center py-2 border-b-2 border-white "
            key={Math.random()}
          >
            <p className="uppercase text-gray-900">{task}</p>
            <div className="flex gap-x-4">
              <button
                className="bg-yellow-200 text-yellow-950 hover:bg-yellow-500 rounded-md md:px-6 md:py-2 p-2"
                onClick={() => handleEditTask(task)}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button
                className="bg-red-200 text-red-950 hover:bg-red-600 rounded-md md:px-6 md:py-2 p-2"
                onClick={() => handleDeleteTask(task)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </center>
  );
};

export default Display_toDo;
