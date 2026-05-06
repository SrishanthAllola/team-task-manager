function Navbar() {

  const role = localStorage.getItem("role");

  const logoutUser = () => {

    localStorage.clear();

    window.location.href = "/";

  };



  return (

    <div className="bg-black text-white px-8 py-4 shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Team Task Manager
        </h1>



        <div className="flex items-center gap-6 text-lg">

          <a
            href="/dashboard"
            className="hover:text-blue-400"
          >
            Dashboard
          </a>

          <a
            href="/tasks"
            className="hover:text-blue-400"
          >
            Tasks
          </a>

          <a
            href="/projects"
            className="hover:text-blue-400"
          >
            Projects
          </a>



          <span className="text-blue-400 capitalize font-semibold">
            {role}
          </span>



          <button
            onClick={logoutUser}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}

export default Navbar;