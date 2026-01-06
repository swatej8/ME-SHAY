"use client";

import { useState, useEffect } from "react";
import { questions } from "./steps";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, CheckCircle2, Sparkles, Share2, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

export default function Wizard({ onBack }: { onBack: () => void }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // Dynamic Greeting based on answers
    const getGreeting = () => {
        if (answers.industry && answers.location && currentStep > 3) {
            const industryLabels = {
                manufacturing: "factory",
                service: "business",
                agriculture: "agri-business",
                it: "tech startup"
            };
            const loc = answers.location === "other" ? "MP" : answers.location;
            // Capitalize location
            const locName = loc.charAt(0).toUpperCase() + loc.slice(1);
            return `Namaste! Checking schemes for your ${industryLabels[answers.industry as keyof typeof industryLabels] || "business"} in ${locName}...`;
        }
        return null;
    };

    const handleSelect = (value: string) => {
        setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: value }));
        // Auto advance after short delay for better UX
        setTimeout(() => {
            handleNext(value);
        }, 300);
    };

    const handleNext = (value?: string) => {
        // If we just selected a value, use it, otherwise check state
        const val = value || answers[questions[currentStep].id];
        if (!val) return; // Validation

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            startProcessing();
        }
    };

    const startProcessing = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setShowResults(true);
        }, 2500); // 2.5s processing time
    };

    const progress = ((currentStep + 1) / questions.length) * 100;

    if (showResults) {
        return <ResultsDashboard answers={answers} onReset={onBack} />;
    }

    if (isProcessing) {
        return <ProcessingScreen greeting={getGreeting()} />;
    }

    const question = questions[currentStep];

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                    <span>Step {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Completed</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-[var(--color-brand)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Greeting Bubble */}
            <AnimatePresence>
                {getGreeting() && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-4 p-3 bg-blue-50 text-blue-800 rounded-lg text-sm text-center font-medium border border-blue-100"
                    >
                        {getGreeting()}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 min-h-[400px] flex flex-col">
                <div className="flex-1">
                    <motion.div
                        key={currentStep}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {question.question}
                        </h2>
                        {question.subtitle && (
                            <p className="text-gray-500 mb-6">{question.subtitle}</p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {question.options?.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelect(option.value)}
                                    className={cn(
                                        "relative flex items-center p-4 rounded-xl border-2 transition-all text-left hover:scale-[1.02] active:scale-[0.98]",
                                        answers[question.id] === option.value
                                            ? "border-[var(--color-brand)] bg-blue-50/50 ring-1 ring-[var(--color-brand)]"
                                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                    )}
                                >
                                    <div className={cn(
                                        "p-3 rounded-lg mr-4",
                                        answers[question.id] === option.value
                                            ? "bg-[var(--color-brand)] text-white"
                                            : "bg-gray-100 text-gray-500"
                                    )}>
                                        <option.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={cn("font-bold", answers[question.id] === option.value ? "text-[var(--color-brand)]" : "text-gray-900")}>
                                            {option.label}
                                        </h3>
                                    </div>
                                    {answers[question.id] === option.value && (
                                        <div className="absolute top-4 right-4 text-[var(--color-brand)]">
                                            <CheckCircle2 className="w-5 h-5 fill-current" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
                    <Button
                        variant="ghost"
                        onClick={() => {
                            if (currentStep > 0) setCurrentStep(currentStep - 1);
                            else onBack();
                        }}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                    </Button>

                    <Button
                        disabled={!answers[question.id]}
                        onClick={() => handleNext()}
                        className={cn("bg-[var(--color-brand)] hover:bg-[var(--color-brand)]", !answers[question.id] && "opacity-50 cursor-not-allowed")}
                    >
                        Next Step <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

function ProcessingScreen({ greeting }: { greeting?: string | null }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border-4 border-[var(--color-brand)] border-t-transparent rounded-full mb-8"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing 50+ MP Government Policies...</h2>
            <p className="text-gray-500 max-w-md mx-auto">
                {greeting || "Finding the best subsidy matches for your profile."}
            </p>
        </div>
    );
}

function ResultsDashboard({ answers, onReset }: { answers: Record<string, string>, onReset: () => void }) {
    useEffect(() => {
        // Trigger confetti on mount
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
                <div className="bg-[var(--color-brand)] p-6 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]" />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/30"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span>99% Match Found</span>
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Best Scheme for You</h2>
                    <p className="opacity-90">Based on your profile as a {answers.category === "woman" ? "Woman Entrepreneur" : "Business Owner"} in {answers.location}</p>
                </div>

                <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
                        <div>
                            <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Eligible Grant Amount</p>
                            <div className="text-5xl md:text-6xl font-bold text-[var(--color-success)] tracking-tight">
                                ₹20,00,000
                            </div>
                            <p className="text-sm text-gray-400 mt-2">*Mukhyamantri Udyam Kranti Yojna</p>
                        </div>

                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <Button size="lg" className="w-full md:w-auto h-14 text-lg shadow-lg shadow-blue-500/20">
                                Direct Apply Now <ExternalLink className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="w-full md:w-auto h-14 text-lg">
                                <Share2 className="ml-2 w-5 h-5" /> Share on WhatsApp
                            </Button>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-[var(--color-brand)] rounded-full" />
                            Scheme Highlights
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-green-100 text-green-600 mt-0.5">
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                                <span className="text-gray-600">3% Interest Subsidy on Term Loans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-green-100 text-green-600 mt-0.5">
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                                <span className="text-gray-600">Collateral-free loan guarantee coverage</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-green-100 text-green-600 mt-0.5">
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                                <span className="text-gray-600">Special preference for {answers.industry} sector</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 text-center">
                        <Button variant="ghost" onClick={onReset} className="text-gray-400 hover:text-gray-600">
                            Start Over
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
