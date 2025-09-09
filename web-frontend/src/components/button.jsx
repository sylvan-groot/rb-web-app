export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`mx-5 text-gray-700 font-bold hover:text-blue-600 relative
        after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
        after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
        hover:after:w-full
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}