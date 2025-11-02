import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../api/authApi";
import LoginCard from "../components/LoginCard";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (phone, password) => {
    setLoading(true);
    setError("");

    try {
      const response = await login(phone, password);
      authLogin(response.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://api.builder.io/api/v1/image/assets/TEMP/5989db535afb21b2a3a22883b2440850a53a4c94?width=3868")',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #161C2D 100%)",
        }}
      />

      {/* Login Card */}
      <div className="relative z-10">
        <LoginCard onLogin={handleLogin} loading={loading} error={error} />
      </div>
    </div>
  );
}