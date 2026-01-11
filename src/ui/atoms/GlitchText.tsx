import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface GlitchTextProps {
    text: string;
    as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
    className?: string;
    delay?: number;
}

export const GlitchText = ({ text, as: Component = "span", className = "", delay = 0 }: GlitchTextProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        // @ts-ignore
        <Component ref={ref} className={`relative inline-block ${className}`}>
            <span className="sr-only">{text}</span>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className="block relative z-10"
            >
                {text}
            </motion.span>
        </Component>
    );
};
