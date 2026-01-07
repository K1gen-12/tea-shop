import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "outline" | "filled";
    className?: string;
}

export function Badge({ children, variant = "outline", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-sans-jp tracking-wider",
                {
                    "border border-brown-700 text-brown-700": variant === "outline",
                    "bg-brown-700 text-white": variant === "filled",
                },
                className
            )}
        >
            {children}
        </span>
    );
}
