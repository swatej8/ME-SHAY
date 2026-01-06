"use client";

import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * About Page
 * Information about the mission and proper attribution.
 */
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <main className="pt-24 pb-12">
                {/* Hero Section */}
                <section className="container mx-auto px-4 max-w-4xl text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-[var(--color-brand)] rounded-3xl flex items-center justify-center text-white font-bold text-4xl mx-auto mb-8 shadow-2xl shadow-orange-500/40"
                    >
                        M
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Empowering Madhya Pradesh</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        ME Sahay is a digital bridge connecting the visionary entrepreneurs of MP with government support.
                        We simplify complexity so you can focus on what matters—business growth.
                    </p>
                </section>

                {/* Mission Grid */}
                <section className="bg-orange-50 py-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="text-xl font-bold mb-2">Fast & Simple</h3>
                                <p className="text-gray-500">60-second wizard to find your perfect match.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-2">Trusted Partner</h3>
                                <p className="text-gray-500">Official data directly from MP Government portals.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                                <div className="text-4xl mb-4">💡</div>
                                <h3 className="text-xl font-bold mb-2">Smart Logic</h3>
                                <p className="text-gray-500">AI-driven recommendations for your specific sector.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="container mx-auto px-4 max-w-4xl py-20 text-center">
                    <h2 className="text-3xl font-bold mb-12">Built with ❤️ for Hackathon</h2>
                    <p className="text-gray-500">Designed and Developed by <span className="font-bold text-gray-900">Swatej</span>.</p>
                </section>
            </main>
        </div>
    );
}
