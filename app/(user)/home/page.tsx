"use client";
import UserLayout from "@/layouts/user-layout";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Book, FileText, Search, Users } from "lucide-react";

interface FeatureCardProps {
	icon: React.ReactElement;
	title: string;
	description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
}) => (
	<motion.div
		className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
		whileHover={{ y: -5 }}
	>
		<div className="flex items-center mb-4">
			<div className="bg-black p-3 rounded-full mr-4">
				{React.cloneElement(icon, { className: "text-white h-6 w-6" })}
			</div>
			<h4 className="text-xl font-semibold">{title}</h4>
		</div>
		<p className="text-gray-600">{description}</p>
	</motion.div>
);

const Features = () => (
	<section id="features" className="container mx-auto px-6 py-20">
		<h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
			<FeatureCard
				icon={<Search />}
				title="Smart Search"
				description="Utilize LangChain and fine-tuned models to provide accurate answers to regulation queries."
			/>
			<FeatureCard
				icon={<FileText />}
				title="Form Management"
				description="Easily find, fill, and print necessary forms for various academic procedures."
			/>
			<FeatureCard
				icon={<Book />}
				title="Comprehensive Database"
				description="Access a wide range of regulations, including academic policies, student conduct, and more."
			/>
			<FeatureCard
				icon={<Users />}
				title="User-Friendly Interface"
				description="Intuitive design for easy navigation and quick access to important information."
			/>
		</div>
	</section>
);

const Hero = () => (
	<section className="container mx-auto px-6 py-20 text-center">
		<motion.h2
			className="text-5xl font-bold mb-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			Welcome to UIT Regulations
		</motion.h2>
		<motion.p
			className="text-xl text-gray-600 mb-12"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			Explore and understand all the regulations that govern your academic life
			at UIT.
		</motion.p>
		<motion.button
			className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.4 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			Start Exploring
			<ArrowRight className="ml-2" />
		</motion.button>
	</section>
);

const KeyFeatures = () => (
	<section id="key-features" className="container mx-auto px-6 py-20">
		<h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
		<ul className="space-y-4 max-w-2xl mx-auto">
			{[
				"Intelligent regulation search and query system",
				"Form finder and PDF generation for easy printing",
				"User authentication and profile management",
				"Regular updates to keep information current",
				"Mobile-responsive design for access on various devices",
			].map((item, index) => (
				<motion.li
					key={index}
					className="flex items-center space-x-2"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					<div className="w-2 h-2 bg-black rounded-full" />
					<span>{item}</span>
				</motion.li>
			))}
		</ul>
	</section>
);

const TechStack = () => (
	<section id="tech-stack" className="container mx-auto px-6 py-20 bg-gray-50">
		<h3 className="text-3xl font-bold mb-12 text-center">Technology Stack</h3>
		<ul className="space-y-4 max-w-2xl mx-auto">
			{[
				"Frontend: Next.js with Tailwind CSS",
				"Backend: Express.js on Node.js",
				"Database: MongoDB",
				"AI Integration: LangChain for natural language processing",
				"File Storage: Firebase Storage",
			].map((item, index) => (
				<motion.li
					key={index}
					className="flex items-center space-x-2"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					<div className="w-2 h-2 bg-black rounded-full" />
					<span>{item}</span>
				</motion.li>
			))}
		</ul>
	</section>
);

export default function HomePage() {
	return (
		<UserLayout>
			<div className="min-h-screen bg-white text-black font-sans">
				<main className="pt-20">
					<Hero />
					<Features />
					<TechStack />
					<KeyFeatures />
				</main>
			</div>
		</UserLayout>
	);
}
