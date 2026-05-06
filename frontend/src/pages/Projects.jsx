import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Projects() {

  const role = localStorage.getItem("role");

  const [projects, setProjects] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [teamMembers, setTeamMembers] = useState("");



  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }

  };



  const createProject = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/projects",
        {
          name,
          description,
          createdBy,
          teamMembers: teamMembers.split(",")
        }
      );

      alert("Project Created");

      setName("");
      setDescription("");
      setCreatedBy("");
      setTeamMembers("");

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };



  const deleteProject = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`
      );

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    fetchProjects();

  }, []);




  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Project Management
          </h1>



          {role === "admin" && (

            <div className="bg-white p-6 rounded-xl shadow-md mb-10">

              <h2 className="text-2xl font-semibold mb-4">
                Create Project
              </h2>

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Project Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Created By"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded-lg mb-4"
                placeholder="Team Members (comma separated)"
                value={teamMembers}
                onChange={(e) => setTeamMembers(e.target.value)}
              />

              <button
                onClick={createProject}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Create Project
              </button>

            </div>

          )}



          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {projects.map((project) => (

              <div
                key={project._id}
                className="bg-white p-5 rounded-xl shadow-md"
              >

                <h2 className="text-2xl font-bold">
                  {project.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  {project.description}
                </p>

                <p className="mt-2">
                  <span className="font-semibold">
                    Created By:
                  </span>{" "}
                  {project.createdBy}
                </p>

                <p className="mt-2">
                  <span className="font-semibold">
                    Team Members:
                  </span>{" "}
                  {project.teamMembers.join(", ")}
                </p>



                {role === "admin" && (

                  <button
                    onClick={() => deleteProject(project._id)}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete Project
                  </button>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </>

  );

}

export default Projects;