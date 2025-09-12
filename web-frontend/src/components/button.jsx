export default function Button({ children, className, href, ...props}) {
  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (props.onClick) props.onClick(e);
  };

  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      className={`mx-1 text-gray-700 font-bold hover:text-blue-600 relative
        after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
        after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
        hover:after:w-full
        ${className}`}
        onClick={handleClick}
      {...props}
    >
      {children}
    </Component>
  );
}