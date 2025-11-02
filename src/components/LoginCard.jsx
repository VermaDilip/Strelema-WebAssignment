import { useState } from "react";
import InputField from "./InputField";
import { MailIcon, LockIcon } from "./Icons";

export default function LoginCard({ onLogin, loading, error }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(phone, password);
  };

  return (
    <div className="w-full max-w-[410px] mx-4 bg-white rounded-[10px] shadow-lg p-8 md:p-[29px]">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <h1 className="text-[20px] font-bold text-[#161C2D] leading-normal">
          Login
        </h1>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Phone Field */}
          <InputField
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            icon={<MailIcon />}
          />

          {/* Password Field */}
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<LockIcon />}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-[15px] h-[15px] rounded-[2px] border-[0.5px] border-[#161C2D] cursor-pointer accent-[#4F46E5]"
              />
              <span className="text-[#A3A3A3] font-normal">Remember me</span>
            </label>
            <button
              type="button"
              className="text-[#A3A3A3] font-normal hover:text-[#161C2D] transition-colors"
            >
              Forgot password?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[40px] bg-[#4F46E5] hover:bg-[#4338CA] disabled:bg-gray-400 transition-colors rounded-[8px] text-white text-sm font-medium"
        >
          {loading ? "Logging in..." : "Login Now"}
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Sign Up Link */}
        <p className="text-center text-xs font-medium">
          <span className="text-[#A3A3A3] font-normal">
            Don't have an account?{" "}
          </span>
          <button
            type="button"
            className="text-[#161C2D] font-normal hover:underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
}