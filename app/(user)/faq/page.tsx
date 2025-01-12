"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import UserLayout from "@/layouts/user-layout";

const FAQPage = () => {
	return (
		<UserLayout>
			<div className="min-h-screen bg-white text-black font-sans">
				<main>
					<Hero />
					<FAQSection />
				</main>
			</div>
		</UserLayout>
	);
};

const Hero = () => (
	<section className="container mx-auto px-6 py-20 text-center">
		<motion.h2
			className="text-4xl font-bold mb-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			Frequently Asked Questions
		</motion.h2>
		<motion.p
			className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			Find answers to common questions about using the UIT Regulations system.
		</motion.p>
	</section>
);

const FAQSection = () => {
	const faqs = [
		{
			question: "How do I create an account?",
			answer:
				"To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your UIT email address, create a password, and provide your full name. Once you submit the form, you'll receive a verification email. Click the link in the email to activate your account.",
		},
		{
			question: "Can I use the system without an account?",
			answer:
				"While some basic features are available to all users, creating an account allows you to access personalized features such as saving frequently used regulations, tracking your search history, and receiving updates on regulation changes relevant to your courses.",
		},
		{
			question: "How do I search for specific regulations?",
			answer:
				"Use the search bar at the top of the page to enter keywords related to the regulation you're looking for. You can also use the category filters on the left sidebar to narrow down your search. The system uses natural language processing, so you can phrase your query as a question if you prefer.",
		},
		{
			question: "Are the regulations on this system always up to date?",
			answer:
				"Yes, we strive to keep all regulations current. The system is updated regularly to reflect the latest changes in UIT policies. Each regulation displays its last update date, and you can subscribe to notifications for specific regulations to be informed of any changes.",
		},
		{
			question: "How do I fill out and submit forms?",
			answer:
				"Navigate to the 'Forms' section in the main menu. Select the form you need, and you'll be taken to an online fillable version. Enter the required information, and you can either submit the form electronically (if available for that form) or print it for physical submission. The system will save your progress, allowing you to return and complete the form later if needed.",
		},
		{
			question:
				"What should I do if I can't find a specific regulation or form?",
			answer:
				"If you can't find what you're looking for, try using different keywords in the search bar. If you still can't find it, use the 'Contact Support' button at the bottom of any page to reach out to our support team. They'll assist you in locating the information or direct you to the appropriate resource.",
		},
		{
			question: "Is my personal information secure?",
			answer:
				"Yes, we take data security seriously. All personal information is encrypted and stored securely. We do not share your data with third parties. You can review our privacy policy for more detailed information on how we handle and protect your data.",
		},
	];

	return (
		<section className="container mx-auto px-6">
			<div className="max-w-3xl mx-auto">
				{faqs.map((faq, index) => (
					<FAQItem key={index} question={faq.question} answer={faq.answer} />
				))}
			</div>
		</section>
	);
};

interface FAQItemProps {
	question: string;
	answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			className="mb-6 border-b border-gray-200 pb-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<button
				className="flex justify-between items-center w-full text-left"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
			>
				<h3 className="text-xl font-semibold">{question}</h3>
				{isOpen ? (
					<ChevronUp className="w-6 h-6" />
				) : (
					<ChevronDown className="w-6 h-6" />
				)}
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<p className="mt-4 text-gray-600">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default FAQPage;
