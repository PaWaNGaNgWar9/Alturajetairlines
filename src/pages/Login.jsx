import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaGoogle} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Login=()=>
{
    return(
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-amber-100">
            <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md ">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login to Altura<span className="text-amber-300">Jet</span></h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-white" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border-b rounded focus:outline-none  border-blue-300 text-white" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 text-white" htmlFor="password">Password</label>
                        <input type="
                        password" id="password" className="w-full px-3 py-2 border-b rounded focus:outline-none  border-blue-300 text-white" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">Login</button>
                         <p className="text-white text-center p-5"> Or Sign up Using</p>
                         <div className=" flex flex-row justify-center gap-4">
                                <div className="w-8 h-8 p-2 rounded-full  flex items-center bg-white"><FaGoogle className="text-blue-600"/></div>
                                <div className="w-8 h-8 p-2 rounded-full  flex items-center bg-white"><FaFacebookF className="text-blue-600"/></div>
                                <div className="w-8 h-8 p-2 rounded-full  flex items-center bg-white"><FaXTwitter className="text-blue-600"/></div>
                         </div>
                         <div>
                           <p className="text-white text-center mt-4">
                            Don't have an account? 
                           <Link to="/signup" className="text-blue-400 hover:underline">
                           Sign up
                           </Link>
                           </p>
                         </div>
                        </form>
                        </div>
                        </div>
                        )
}
 export default Login;
  