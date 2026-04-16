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
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 justify-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Name</span></label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Email</span></label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control mb-6">
              <label className="label"><span className="label-text">Password</span></label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;