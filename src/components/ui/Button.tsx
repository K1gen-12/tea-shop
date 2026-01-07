import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", isLoading, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(
                    "inline-flex items-center justify-center transition-all duration-300 ease-out",
                    "font-sans-jp text-base font-medium tracking-[0.1em] rounded-[2px]",
                    "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                    {
                        // Primary
                        "bg-green-700 text-white hover:bg-green-900 hover:opacity-90": variant === "primary",
                        "px-12 py-4": variant === "primary",

                        // Secondary
                        "bg-transparent border border-green-700 text-green-700 hover:bg-green-100":
                            variant === "secondary",
                        "px-[46px] py-[14px]": variant === "secondary",
                    },
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
