export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}) {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="block text-base font-normal text-[#161C2D]">
        {label}
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[40px] rounded-[4px] border border-[#E5E7EB] text-xs text-[#161C2D] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all ${
            icon ? "pl-[45px] pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}