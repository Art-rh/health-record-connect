
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  color?: "blue" | "red" | "green" | "orange" | "purple";
  className?: string;
}

export function Tag({ children, color = "blue", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium text-white",
        {
          "bg-clinic-tag-blue": color === "blue",
          "bg-clinic-tag-red": color === "red",
          "bg-clinic-tag-green": color === "green",
          "bg-clinic-tag-orange": color === "orange",
          "bg-clinic-tag-purple": color === "purple",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
