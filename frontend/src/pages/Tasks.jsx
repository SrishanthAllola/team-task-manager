import { useEffect, useState } from "react";
import axios from "axios";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  const role = localStorage.getItem("role");



  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "https://team-task-manager-production-57d9.up.railway.app/api/tasks"
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    fetchTasks();

  }, []);




  const createTask = async () => {

    try {

      await axios.post(
        "https://team-task-manager-production-57d9.up.railway.app/api/tasks",
        {
          title,
          description,
          assignedTo,
          dueDate,
          status: "Pending"
        }
      );

      alert("Task Created");

      setTitle("");
      setDescription("");
      setAssignedTo("");
      setDueDate("");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };




  const completeTask = async (id) => {

    try {

      await axios.put(
        `https://team-task-manager-production-57d9.up.railway.app/api/tasks/${id}`,
        {
          status: "Completed"
        }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };




  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `https://team-task-manager-production-57d9.up.railway.app/api/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };



  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Task Management
      </h1>



      {role === "admin" && (

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">

          <h2 className="text-2xl font-semibold mb-5">
            Create Task
          </h2>



          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />



          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />



          <input
            type="text"
            placeholder="Assign To"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />



          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />



          <button
            onClick={createTask}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Create Task
          </button>

        </div>

      )}




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-semibold mb-3">
              {task.title}
            </h2>



            <p className="text-gray-600 mb-3">
              {task.description}
            </p>



            <p className="mb-2">
              <strong>Assigned To:</strong>{" "}
              {task.assignedTo}
            </p>



            <p className="mb-2">
              <strong>Status:</strong>{" "}
              {task.status}
            </p>



            <p className="mb-4">
              <strong>Due Date:</strong>{" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No Due Date"}
            </p>



            {task.status !== "Completed" && (

              <button
                onClick={() => completeTask(task._id)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg mr-3"
              >
                Mark Completed
              </button>

            )}



            {role === "admin" && (

              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}

export default Tasks;