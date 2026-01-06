"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgePercent, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const schemes = [
    {
        title: "Mukhyamantri Udyam Kranti Yojna",
        benefit: "₹50 Lakh Loan Guarantee",
        subsidy: "3% Interest Subsidy",
        color: "bg-blue-50 text-blue-700 border-blue-100",
        icon: Building
    },
    {
        title: "Startup MPG policy 2022",
        benefit: "₹30 Lakh Grant",
        subsidy: "Marketing Support",
        color: "bg-green-50 text-green-700 border-green-100",
        icon: BadgePercent
    },
    {
        title: "Tantya Mama Arthik Kalyan",
        benefit: "Project Cost up to ₹1 Lakh",
        subsidy: "For ST Entrepreneurs",
        color: "bg-orange-50 text-orange-700 border-orange-100",
        icon: Building
    }
];

export default function PopularSchemes() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <span className="text-[var(--color-brand)] font-semibold tracking-wider text-sm uppercase">Trending Now</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Popular Schemes in 2026</h2>
                    </div>
                    <Button variant="link" className="hidden md:flex">View all 50+ schemes <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {schemes.map((scheme, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-6 rounded-2xl border ${scheme.color.replace('bg-', 'border-')} ${scheme.color} transition-all cursor-pointer`}
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                                <scheme.icon className="w-6 h-6 opacity-80" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 leading-tight">{scheme.title}</h3>
                            <div className="space-y-1">
                                <p className="font-semibold text-lg">{scheme.benefit}</p>
                                <p className="text-sm opacity-80">{scheme.subsidy}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
