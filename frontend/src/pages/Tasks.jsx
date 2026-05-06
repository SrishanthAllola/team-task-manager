import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Tasks() {

  const role = localStorage.getItem("role");
  const loggedInUser = localStorage.getItem("name");

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");



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



  const createTask = async () => {

    try {

      await axios.post(
        "https://team-task-manager-production-57d9.up.railway.app/api/tasks",
        {
          title,
          description,
          assignedTo,
          status: "Pending"
        }
      );

      alert("Task Created");

      setTitle("");
      setDescription("");
      setAssignedTo("");

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



  useEffect(() => {

    fetchTasks();

  }, []);




  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Team Task Manager
          </h1>



          {role === "admin" && (

            <div className="bg-white p-6 rounded-xl shadow-md mb-10">

              <h2 className="text-2xl font-semibold mb-4">
                Create Task
              </h2>

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Assign To Member"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              />

              <button
                onClick={createTask}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Create Task
              </button>

            </div>

          )}



          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {tasks
              .filter((task) => {

                if (role === "admin") {
                  return true;
                }

                return task.assignedTo === loggedInUser;

              })
              .map((task) => (

                <div
                  key={task._id}
                  className="bg-white p-5 rounded-xl shadow-md"
                >

                  <h2 className="text-2xl font-bold">
                    {task.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {task.description}
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">
                      Assigned To:
                    </span>{" "}
                    {task.assignedTo}
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">
                      Status:
                    </span>{" "}
                    {task.status}
                  </p>



                  {role === "member" && (

                    <button
                      onClick={() => completeTask(task._id)}
                      className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Mark Completed
                    </button>

                  )}



                  {role === "admin" && (

                    <div className="mt-5 flex gap-3">

                      <button
                        onClick={() => completeTask(task._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        Complete
                      </button>

                      <button
                        onClick={() => deleteTask(task._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  )}

                </div>

              ))}

          </div>

        </div>

      </div>

    </>

  );

}

export default Tasks;