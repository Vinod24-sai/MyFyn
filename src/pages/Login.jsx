import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react'; // Add this line to import React

export default function Login() {
  const navigate = useNavigate(); // Correctly called inside the function component

  // The navigate call for successful login should be inside your form submission handler
  // or wherever you handle the login logic.

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <div className="bg-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-lg max-w-md w-full text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="space-y-6">
          {/* ... rest of your form */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline hover:text-white">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
