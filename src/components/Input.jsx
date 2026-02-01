export default function Input({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div className="relative mb-6">
      
      {/* Floating Label */}
      <label
        className="
          absolute -top-2 left-3
          bg-white px-1
          text-xs font-medium text-[#6C25FF]
        "
      >
        {/* Label text (without *) */}
        {label.replace("*", "")}

        {/* Red star */}
        {label.includes("*") && (
          <span className="text-red-500 ml-0.5">*</span>
        )}
      </label>

      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          px-3 py-2.5
          rounded-md
          border border-gray-300
          text-sm
          outline-none
          focus:border-[#6C25FF]
        "
      />
    </div>
  );
}
