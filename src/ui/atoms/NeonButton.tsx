import { motion, type HTMLMotionProps } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    icon?: LucideIcon;
    variant?: "primary" | "accent";
}

export const NeonButton = ({
    children,
    icon: Icon,
    variant = "primary",
    className,
    ...props
}: NeonButtonProps) => {
    const styles = {
        primary: "border-primary text-primary shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] hover:bg-primary/10 hover:shadow-[0_0_25px_0px_rgba(99,102,241,0.6)]",
        accent: "border-accent text-accent shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)] hover:bg-accent/10 hover:shadow-[0_0_25px_0px_rgba(6,182,212,0.6)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative px-8 py-4 font-mono font-bold uppercase tracking-widest border rounded transition-all duration-300 flex items-center gap-3 group backdrop-blur-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
                styles[variant],
                className
            )}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            {children}
        </motion.button>
    );
};
