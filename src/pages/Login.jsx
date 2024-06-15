// src/components/LoginPage.js
import { useState } from "react";
import {Authentication} from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loggedInWithGoogle, getUserData } = Authentication();
  const [isActiveSignIn, setIsActiveSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const redirectToHome = () => {
    try {
      loggedInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = async () => {
    setIsActiveSignIn((pre) => !pre);
    // Implement username and password sign-up logic here
    console.log("Sign up with username and password:", username, password);
  };
  const handleSignIn = async () => {
    console.log("Sign in with username and password:", username, password);
    if (isActiveSignIn && username && password) redirectToHome();
    else alert("Please enter username and password");
    // Implement username and password sign-in logic here
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        {isActiveSignIn ? (
          <button
            onClick={handleSignIn}
            className="mb-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={handleSignUp}
            className="mb-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        )}
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {isActiveSignIn ? "Create Account" : "Back"}
        </button>
      </div>
      <div className="mt-6 w-full max-w-sm">
        <button
          onClick={() => redirectToHome()}
          className="w-full bg-red-500 text-white py-2 rounded mb-2 hover:bg-red-600 transition duration-300"
        >
          Login with Google
        </button>
        {/* <button
                    onClick={() => handleLoginWithProvider(new FacebookAuthProvider())}
                    className="w-full bg-blue-800 text-white py-2 rounded mb-2 hover:bg-blue-900 transition duration-300"
                >
                    Login with Facebook
                </button>
                <button
                    onClick={() => handleLoginWithProvider(new GithubAuthProvider())}
                    className="w-full bg-gray-800 text-white py-2 rounded mb-2 hover:bg-gray-900 transition duration-300"
                >
                    Login with GitHub
                </button>
                <button
                    onClick={() => handleLoginWithProvider(new TwitterAuthProvider())}
                    className="w-full bg-blue-400 text-white py-2 rounded mb-2 hover:bg-blue-500 transition duration-300"
                >
                    Login with Twitter
                </button> */}
        {/* Add additional login options here */}
      </div>
    </div>
  );
};

export default Login;
