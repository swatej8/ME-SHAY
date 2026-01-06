"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

/**
 * Navbar Component
 * 
 * Implements a sticky navigation bar that stays at the top of the viewport.
 * Features:
 * - Responsive design (Hamburger menu on mobile)
 * - Sticky positioning with backdrop blur effect
 * - Conditional styling based on scroll position
 */
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Effect to detect scroll position and update state
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 transition-all duration-300 w-full border-b border-transparent",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-gray-100"
                    : "bg-white/50 backdrop-blur-sm py-6" // Added slight bg for readability even at top
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[var(--color-brand)] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                        M
                    </div>
                    <span className={cn(
                        "font-bold text-2xl tracking-tight transition-colors",
                        isScrolled ? "text-gray-900" : "text-gray-900"
                    )}>
                        ME Sahay
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/schemes" className="text-gray-600 hover:text-[var(--color-brand)] font-medium transition-colors">
                        All Schemes
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-[var(--color-brand)] font-medium transition-colors">
                        About App
                    </Link>
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-gray-600 hover:text-[var(--color-brand)] hover:bg-orange-50">
                            Login
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white shadow-md hover:shadow-lg transition-all">
                            Sign Up
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col gap-4">
                    <Link href="/schemes" className="text-gray-600 hover:text-[var(--color-brand)] font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                        All Schemes
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-[var(--color-brand)] font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                        About App
                    </Link>
                    <div className="flex flex-col gap-2 mt-2">
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="outline" className="w-full justify-center">Login</Button>
                        </Link>
                        <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full justify-center bg-[var(--color-brand)] text-white">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
