import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const signupUser = async () => {

    try {

      await axios.post(
        "https://team-task-manager-production-57d9.up.railway.app/api/auth/signup",
        {
          name,
          email,
          password,
          role: "member"
        }
      );

      alert("Signup Successful");

      window.location.href = "/";

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Signup Failed"
      );

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-8">
          Signup
        </h1>



        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />



        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />



        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6"
        />



        <button
          onClick={signupUser}
          className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg"
        >
          Signup
        </button>



        <p className="mt-5 text-center">

          Already have account?

          <a
            href="/"
            className="text-blue-600 ml-2"
          >
            Login
          </a>

        </p>

      </div>

    </div>

  );

}

export default Signup;