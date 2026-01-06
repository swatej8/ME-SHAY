"use client";

import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Schemes Page
 * Displays a list of all government schemes available in the platform.
 * Features:
 * - Search functionality (mock)
 * - Filtering logic (mock)
 * - Sticky Navbar integration
 */
export default function SchemesPage() {
    const schemes = [
        { title: "Mukhyamantri Udyam Kranti Yojna", category: "Loan Subsidy", amount: "₹10L - ₹50L", desc: "Interest subsidy on term loans for new ventures." },
        { title: "Ladli Behna Yojna", category: "Women Empowerment", amount: "₹1250/mo", desc: "Monthly economic support for women entrepreneurs." },
        { title: "MP Startup Policy 2022", category: "Startup", amount: "₹15 Lakhs", desc: "Venture capital fund support and lease rental assistance." },
        { title: "Tantya Mama Arthik Kalyan", category: "Tribal Welfare", amount: "₹1 Lakh", desc: "Low-interest loans for tribal self-employment." },
        { title: "MSME Technology Upgradation", category: "Growth", amount: "upto ₹1 Cr", desc: "Capital subsidy for zero defect certification (ZED)." },
        { title: "Bhagwan Birsa Munda Scheme", category: "Agriculture", amount: "₹5 Lakhs", desc: "Support for agri-processing units." },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <main className="pt-24 pb-12 px-4 container mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore MP Government Schemes</h1>
                    <p className="text-xl text-gray-600">Find the perfect financial support for your business needs.</p>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 sticky top-24 z-30">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input className="pl-10 h-12 text-lg bg-gray-50 border-gray-200" placeholder="Search schemes (e.g., 'Loan', 'Women')..." />
                        </div>
                        <Button variant="outline" className="h-12 px-6 gap-2">
                            <Filter className="w-4 h-4" /> Filters
                        </Button>
                    </div>
                </div>

                {/* Schemes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {schemes.map((scheme, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                                    {scheme.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{scheme.title}</h3>
                                <p className="text-gray-500 text-sm line-clamp-3">{scheme.desc}</p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Benefit</p>
                                    <p className="font-bold text-[var(--color-success)]">{scheme.amount}</p>
                                </div>
                                <Button size="sm" variant="ghost" className="text-[var(--color-brand)] hover:bg-orange-50 p-0 hover:px-2">
                                    Details <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
