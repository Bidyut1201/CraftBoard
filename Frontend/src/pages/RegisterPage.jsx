
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/auth/register", { name, email, password });
      toast.success("Account created! Please login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #000 60%, #00FF9D40 100%)" }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 sm:p-10 flex flex-col justify-center"
        style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.1)" }}
      >
        <h2 className="text-2xl font-medium text-white mb-1">Create an account</h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
          Sign up to start organizing your notes
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="block text-xs mb-1.5 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-xs mb-1.5 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-xs mb-1.5 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-3 text-sm font-medium text-black mt-1"
            style={{ background: "#00FF9D" }}
          >
            {loading ? "Registering..." : "Create account"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#00FF9D" }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;