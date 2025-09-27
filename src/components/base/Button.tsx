import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg" | "icon";
} & React.ComponentPropsWithRef<"button">;

export const Button = ({
  children,
  variant = "primary",
  size = "lg",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center cursor-pointer border border-zinc-200 rounded-md py-2 px-4",
        variant === "primary" && "bg-violet-500 text-white hover:bg-violet-600",
        variant === "secondary" && "bg-zinc-900 text-white hover:bg-zinc-800",
        variant === "outline" &&
          "bg-transparent text-zinc-900 hover:bg-[#F1F1F1]  transition-all duration-200 ease-in-out",
        variant === "link" &&
          "bg-transparent text-violet-500 hover:underline transition-all duration-200 ease-in-out",
        size === "sm" && "w-24",
        size === "md" && "w-32",
        size === "lg" && "w-40",
        size === "icon" && "p-3",
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
