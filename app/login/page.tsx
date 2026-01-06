"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Left Interface */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-16 max-w-2xl mx-auto w-full">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-[var(--color-brand)] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-500">Enter your details to access your dashboard.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email / Phone</label>
                        <Input type="text" placeholder="name@example.com" required className="bg-gray-50 border-gray-200" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <Input type="password" placeholder="••••••••" required className="bg-gray-50 border-gray-200" />
                    </div>

                    <Button type="submit" className="w-full text-lg h-12" disabled={isLoading}>
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
                    </Button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account? <Link href="/signup" className="text-[var(--color-brand)] font-semibold hover:underline">Sign up</Link>
                </p>
            </div>

            {/* Right Image Panel */}
            <div className="hidden md:flex flex-1 bg-orange-50 relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 bg-[var(--color-brand)] opacity-10 pattern-grid-lg" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 p-12 text-center"
                >
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[var(--color-brand)] font-bold text-4xl mx-auto mb-6">M</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering 10,000+ Enterprises</h2>
                    <p className="text-gray-600 max-w-md mx-auto">Join the fastest growing community of entrepreneurs in Madhya Pradesh.</p>
                </motion.div>
            </div>
        </div>
    );
}
