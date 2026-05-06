import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {

  const role = localStorage.getItem("role");

  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    overdueTasks: 0
  });



  const fetchDashboardStats = async () => {

    try {

      const res = await axios.get(
        "https://team-task-manager-production-57d9.up.railway.app/api/dashboard"
      );

      setStats(res.data);

    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    fetchDashboardStats();

  }, []);




  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h1 className="text-4xl font-bold mb-4">
              Dashboard
            </h1>

            <p className="text-xl mb-8">
              Logged in as:
              <span className="font-bold text-blue-600 ml-2 capitalize">
                {role}
              </span>
            </p>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

              <div className="bg-blue-500 text-white p-6 rounded-xl">

                <h2 className="text-3xl font-bold">
                  {stats.totalTasks}
                </h2>

                <p className="mt-2">
                  Total Tasks
                </p>

              </div>



              <div className="bg-green-500 text-white p-6 rounded-xl">

                <h2 className="text-3xl font-bold">
                  {stats.completedTasks}
                </h2>

                <p className="mt-2">
                  Completed Tasks
                </p>

              </div>



              <div className="bg-yellow-500 text-white p-6 rounded-xl">

                <h2 className="text-3xl font-bold">
                  {stats.pendingTasks}
                </h2>

                <p className="mt-2">
                  Pending Tasks
                </p>

              </div>



              <div className="bg-red-500 text-white p-6 rounded-xl">

                <h2 className="text-3xl font-bold">
                  {stats.overdueTasks}
                </h2>

                <p className="mt-2">
                  Overdue Tasks
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}

export default Dashboard;