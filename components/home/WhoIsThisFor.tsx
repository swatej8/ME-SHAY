"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoIsThisFor() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Made for Every Entrepreneur</h2>
                    <p className="text-gray-600 text-lg">Whether you are starting a high-tech startup in Indore or a manufacturing unit in Jabalpur, we have you covered.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-3xl p-8 shadow-xl relative group hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="md:absolute -right-12 -top-12 w-48 h-48 md:w-56 md:h-56 mb-4 md:mb-0 mx-auto">
                            <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/images/char-woman-real.png"
                                    alt="Tech Entrepreneur"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 md:max-w-[65%]">
                            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-3 inline-block">Tech Startups</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Priya, 24</h3>
                            <p className="text-gray-500 mb-4">Founder of a SaaS platform in Indore.</p>
                            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                <p className="text-sm font-semibold text-green-800">Matched with:</p>
                                <p className="font-bold text-green-900">Startup Policy 2022 (₹15L Grant)</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-3xl p-8 shadow-xl relative group hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="md:absolute -left-12 -top-12 w-48 h-48 md:w-56 md:h-56 mb-4 md:mb-0 mx-auto">
                            <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/images/char-man-real.png"
                                    alt="Manufacturing Entrepreneur"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 md:max-w-[70%] ml-auto text-right">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 inline-block">Manufacturing</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ramesh, 45</h3>
                            <p className="text-gray-500 mb-4">Expanding his textile unit in Burhanpur.</p>
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 inline-block text-left w-full">
                                <p className="text-sm font-semibold text-blue-800">Matched with:</p>
                                <p className="font-bold text-blue-900">Mukhyamantri Udyam Kranti</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
