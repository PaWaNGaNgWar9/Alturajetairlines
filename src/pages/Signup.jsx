import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-amber-100">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Create Altura<span className="text-amber-300">Jet</span> Account
        </h2>

        <form>
          <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-white" htmlFor="email">Full Name</label>
                        <input type="text" id="fullname" className="w-full px-3 py-2 border-b rounded focus:outline-none  border-blue-300 text-white" placeholder="Enter your Name" />
                    </div>

         <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-white" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border-b rounded focus:outline-none  border-blue-300 text-white" placeholder="Enter your email" />
                    </div>

          <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-white" htmlFor="email">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border-b rounded focus:outline-none  border-blue-300 text-white" placeholder="Enter your Password" />
                    </div>
                    

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
          <div>
            <p className="text-center text-white mt-4">
                Already have an account?{" "}
               <Link to="/login" className="text-blue-400 hover:underline">
                    Log in
                </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;