"use client";

import { motion } from "framer-motion";

const realSchemes = [
    "Mukhyamantri Udyam Kranti Yojna",
    "Startup MP Policy 2022",
    "Ladli Behna Yojna (Economic Support)",
    "Tantya Mama Arthik Kalyan Yojna",
    "Bhagwan Birsa Munda Swarojgar Yojna",
    "PM Employment Generation Programme (PMEGP)",
    "MSME Sustainable ZED Certification",
    "MP Industrial Promotion Policy"
];

export default function SchemesTicker() {
    return (
        <div className="bg-[var(--color-brand)] text-white py-3 overflow-hidden relative z-50">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="flex gap-8"
                >
                    {[...realSchemes, ...realSchemes, ...realSchemes].map((scheme, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-medium">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                            {scheme}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
