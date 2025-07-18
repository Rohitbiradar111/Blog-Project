function Button({
  children,
  type = "button",
  className = "",
  bgColor = "bg-blue-600",
  textColor = "white",
  ...props
}) {
  return (
    <button
      type={`${type}`}
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
