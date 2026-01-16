import * as React from "react";

const buttonVariants = {
  default: "bg-gray-900 text-white hover:bg-gray-800",
  outline: "border-2 border-gray-300 bg-white hover:bg-gray-100 text-gray-900",
  ghost: "hover:bg-gray-100 text-gray-900",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-xs",
  lg: "h-12 px-8 text-base",
};

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
  const variantClass = buttonVariants[variant] || buttonVariants.default;
  const sizeClass = buttonSizes[size] || buttonSizes.default;

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 ${variantClass} ${sizeClass} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
