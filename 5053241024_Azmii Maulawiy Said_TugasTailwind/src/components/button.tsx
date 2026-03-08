type BtnProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

const Button = ({ variant, children, size = "md" }: BtnProps) => {
  const base = "rounded-lg font-semibold transition shadow-md";

  const btnStyles = {
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-white",
    ghost:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-w-24",
    md: "px-6 py-3 text-base min-w-36 max-w-40",
  };

  return (
    <button className={`${base} ${btnStyles[variant]} ${sizeStyles[size]}`}>
      {children}
    </button>
  );
};

export default Button;
