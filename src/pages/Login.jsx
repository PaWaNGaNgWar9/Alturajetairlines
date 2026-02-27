import React from "react";
const Login=()=>
{
    return(
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-amber-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to AlturaJet</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input type="
                        password" id="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">Login</button>
                        </form>
                        </div>
                        </div>
                        )
}
 export default Login;
  