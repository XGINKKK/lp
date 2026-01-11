import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxGrid = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Background moves slower (parallax effect)
    const yGrid = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-void">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-void via-[#0a0a0a] to-void" />

            {/* Moving Grid */}
            <motion.div
                style={{ y: yGrid }}
                className="absolute inset-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </motion.div>

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </div>
    );
};
