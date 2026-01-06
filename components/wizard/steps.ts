import { LucideIcon, Factory, Laptop, Leaf, Store, Users, User, MapPin, Building2, Wallet } from "lucide-react";

export type Option = {
    id: string;
    label: string;
    icon: LucideIcon;
    value: string;
};

export type Question = {
    id: string;
    question: string;
    subtitle?: string;
    type: "single" | "input";
    options?: Option[];
    placeholder?: string;
};

export const questions: Question[] = [
    {
        id: "industry",
        question: "What type of business are you starting?",
        subtitle: "Select the category that best fits your plan.",
        type: "single",
        options: [
            { id: "manufacturing", label: "Manufacturing", icon: Factory, value: "manufacturing" },
            { id: "service", label: "Service / Retail", icon: Store, value: "service" },
            { id: "agriculture", label: "Agriculture / Food", icon: Leaf, value: "agriculture" },
            { id: "it", label: "IT / Tech", icon: Laptop, value: "it" },
        ],
    },
    {
        id: "category",
        question: "Which category describes you?",
        subtitle: "MP Government has special schemes for different groups.",
        type: "single",
        options: [
            { id: "general", label: "General", icon: User, value: "general" },
            { id: "woman", label: "Woman Entrepreneur", icon: Users, value: "woman" },
            { id: "sc_st", label: "SC / ST", icon: User, value: "sc_st" },
            { id: "obc", label: "OBC", icon: User, value: "obc" },
        ],
    },
    {
        id: "stage",
        question: "What is your business stage?",
        type: "single",
        options: [
            { id: "new", label: "New Business (Idea)", icon: Sparkles, value: "new" },
            { id: "existing", label: "Existing Business", icon: Building2, value: "existing" },
        ],
    },
    {
        id: "investment",
        question: "Projected Investment",
        subtitle: "Includes machinery, building, and capital.",
        type: "single",
        options: [
            { id: "under_10l", label: "Under ₹10 Lakhs", icon: Wallet, value: "under_10l" },
            { id: "10l_50l", label: "₹10L - ₹50 Lakhs", icon: Wallet, value: "10l_50l" },
            { id: "50l_plus", label: "Above ₹50 Lakhs", icon: Wallet, value: "50l_plus" },
        ],
    },
    {
        id: "location",
        question: "Where will it be located?",
        type: "single",
        options: [
            { id: "indore", label: "Indore", icon: MapPin, value: "indore" },
            { id: "bhopal", label: "Bhopal", icon: MapPin, value: "bhopal" },
            { id: "jabalpur", label: "Jabalpur", icon: MapPin, value: "jabalpur" },
            { id: "other", label: "Other MP District", icon: MapPin, value: "other" },
        ],
    },
];

import { Sparkles } from "lucide-react";
