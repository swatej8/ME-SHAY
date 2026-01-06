"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BadgePercent, Building, FileText, Home, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--color-brand)] rounded-lg flex items-center justify-center text-white font-bold">M</div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">ME Sahay</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-[var(--color-brand)] bg-orange-50 font-semibold mb-1">
                        <Home className="w-4 h-4 mr-2" /> Overview
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                        <FileText className="w-4 h-4 mr-2" /> My Applications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                        <User className="w-4 h-4 mr-2" /> Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                        <Settings className="w-4 h-4 mr-2" /> Settings
                    </Button>
                </nav>

                <div className="p-6 border-t border-gray-50">
                    <Link href="/">
                        <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100">
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    <header className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Namaste, Swatej! 🙏</h1>
                            <p className="text-gray-500">Here's your subsidy application status.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                                <Image src="/images/char-man-real.png" alt="Profile" fill className="object-cover" />
                            </div>
                        </div>
                    </header>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-sm font-medium text-gray-500 mb-1">Eligible Subsidy</p>
                            <h3 className="text-3xl font-bold text-[var(--color-success)]">₹20 Lakhs</h3>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-sm font-medium text-gray-500 mb-1">Matched Schemes</p>
                            <h3 className="text-3xl font-bold text-gray-900">3</h3>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-sm font-medium text-gray-500 mb-1">Application Status</p>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-bold mt-1">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse" />
                                In Progress
                            </div>
                        </div>
                    </div>

                    {/* Recommended Schemes */}
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Recommended for your Manufacturing Business</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Building className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Mukhyamantri Udyam Kranti Yojna</h3>
                                    <p className="text-sm text-gray-500">3% Interest Subsidy on Term Loans for 7 Years</p>
                                </div>
                            </div>
                            <Button className="bg-[var(--color-brand)]">Apply Now <ArrowRight className="ml-2 w-4 h-4" /></Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <BadgePercent className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">MSME Investment Promotion</h3>
                                    <p className="text-sm text-gray-500">40% Capital Subsidy on Machinery</p>
                                </div>
                            </div>
                            <Button variant="outline">View Details</Button>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}
