import { useState } from "react";
import { saveToken, saveUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const location = useLocation();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      return setError(data.error || "Login failed");
    }

    saveToken(data.token);
    saveUser(data.user);

    const redirectTo = location.state?.from || "/search";
    navigate(redirectTo);
  } catch {
    setError("Server error");
  }
};

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
  Don't have an account?{" "}
  <span
  onClick={() =>
    navigate("/signup", {
      state: { from: location.state?.from },
    })
  }
  className="text-green-500 cursor-pointer hover:underline"
>
  Sign up
</span>

</div>
      </form>
    </div>
  );
};

export default Login;
