"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Counter animation logic
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setComplete(true), 500); // Wait a bit after 100%
                    return 100;
                }
                // Random increment for realistic feel
                const increment = Math.floor(Math.random() * 10) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {!complete && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-brand)] text-white overflow-hidden pointer-events-none"
                >
                    <div className="relative text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-8xl md:text-9xl font-black tracking-tighter mb-4"
                        >
                            {count}%
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5 }}
                            className="h-1 bg-white/20 mx-auto max-w-xs rounded-full overflow-hidden"
                        >
                            <motion.div
                                animate={{ width: `${count}%` }}
                                className="h-full bg-white"
                            />
                        </motion.div>
                        <p className="mt-4 text-sm font-medium opacity-80 uppercase tracking-widest">
                            Loading Government Data...
                        </p>
                    </div>

                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
