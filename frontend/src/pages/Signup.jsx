import { useState } from "react";
import { saveToken, saveUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch("http://localhost:5000/api/v1/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      return setError(data.error || "Signup failed");
    }

    saveToken(data.token);
    saveUser(data.user);

    // redirect after signup
    const redirectTo = location.state?.from || "/search";
    navigate(redirectTo);
  } catch (err) {
    setError("Server error");
  }
};


  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Username"
          className="w-full border px-3 py-2 rounded"
          value={form.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
          value={form.password}
          onChange={handleChange}
        />

        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Create Account
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <span
          onClick={() =>
            navigate("/login", {
              state: { from: location.state?.from },
            })
          }
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Login
        </span>

        </div>
      </form>
    </div>
  );
};

export default Signup;
