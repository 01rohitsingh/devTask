export default function Button({
  text,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
     
      className={`
        w-full py-2.5 rounded-md text-sm font-semibold cursor-pointer
        ${
          disabled
            ? "bg-gray-300 text-white cursor-not-allowed"
            : variant === "primary"
            ? "bg-[#6C25FF] text-white"
            : "bg-[#E5D8FF] text-[#1D1D1D]"
        }
      `}
    >
      {text}
    </button>
  );
}
