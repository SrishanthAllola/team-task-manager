import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);



  const loginUser = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "role",
        response.data.user.role
      );

      localStorage.setItem(
        "name",
        response.data.user.name
      );

      alert("Login Successful");

      window.location.href = "/dashboard";

    } catch (error) {

      alert(
        error.response.data.message
      );

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-8">
          Team Task Manager
        </h1>



        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />



        <div className="relative mb-6">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />



          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-3 text-sm text-gray-600"
          >

            {showPassword
              ? "Hide"
              : "Show"}

          </button>

        </div>



        <button
          onClick={loginUser}
          className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg"
        >
          Login
        </button>



        <p className="mt-5 text-center">

          Don’t have account?

          <a
            href="/signup"
            className="text-blue-600 ml-2"
          >
            Signup
          </a>

        </p>

      </div>

    </div>

  );

}

export default Login;