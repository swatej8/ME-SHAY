"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-[var(--color-brand)] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Link>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-[var(--color-brand)] font-bold text-xl mx-auto mb-4">M</div>
                        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                        <p className="text-gray-500 text-sm mt-1">Start your journey with ME Sahay</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">First Name</label>
                                <Input required className="bg-gray-50 border-gray-200" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Last Name</label>
                                <Input required className="bg-gray-50 border-gray-200" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone Number</label>
                            <Input type="tel" placeholder="+91 98765 43210" required className="bg-gray-50 border-gray-200" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Password</label>
                            <Input type="password" required className="bg-gray-50 border-gray-200" />
                        </div>

                        <Button type="submit" className="w-full h-11 mt-4" disabled={isLoading}>
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-xs text-gray-400">
                        By signing up, you agree to our Terms and Privacy Policy.
                    </p>
                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-[var(--color-brand)] font-semibold hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}
