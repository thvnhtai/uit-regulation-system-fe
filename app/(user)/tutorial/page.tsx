"use client";
import UserLayout from "@/layouts/user-layout";
import { motion } from "framer-motion";
import { ArrowRight, Book, FileText, Search, Users } from "lucide-react";
const Hero = () => (
	<section className="container mx-auto px-6 py-20 text-center">
		<motion.h2
			className="text-4xl font-bold mb-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			How to Use UIT Regulations
		</motion.h2>
		<motion.p
			className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			Follow this step-by-step guide to make the most of our regulation search
			and form management system.
		</motion.p>
	</section>
);

const TutorialSteps = () => {
	const steps = [
		{
			title: "Create an Account",
			description:
				"Start by creating a new account. Click on the 'Sign Up' button and fill in your details.",
			icon: <Users className="w-6 h-6" />,
		},
		{
			title: "Search for Regulations",
			description:
				"Use the search bar to find specific regulations. Type keywords or phrases related to your query.",
			icon: <Search className="w-6 h-6" />,
		},
		{
			title: "Browse Regulation Categories",
			description:
				"Explore different regulation categories using the sidebar navigation to find relevant information.",
			icon: <Book className="w-6 h-6" />,
		},
		{
			title: "Access and Fill Forms",
			description:
				"Find necessary forms in the 'Forms' section. Click on a form to view and fill it out electronically.",
			icon: <FileText className="w-6 h-6" />,
		},
		{
			title: "Submit or Print Forms",
			description:
				"After filling out a form, you can submit it electronically or print it for physical submission.",
			icon: <ArrowRight className="w-6 h-6" />,
		},
	];

	return (
		<section className="container mx-auto px-6">
			<div className="max-w-3xl mx-auto">
				{steps.map((step, index) => (
					<TutorialStep key={index} step={step} index={index} />
				))}
			</div>
		</section>
	);
};

interface Step {
	title: string;
	description: string;
	icon: JSX.Element;
}

const TutorialStep = ({ step, index }: { step: Step; index: number }) => (
	<motion.div
		className="mb-12 flex items-start"
		initial={{ opacity: 0, x: -20 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.5, delay: index * 0.1 }}
	>
		<div className="bg-black text-white rounded-full p-3 mr-6">{step.icon}</div>
		<div>
			<h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
			<p className="text-gray-600">{step.description}</p>
		</div>
	</motion.div>
);

const TutorialPage = () => {
	return (
		<UserLayout>
			<div className="min-h-screen bg-white text-black font-sans">
				<main>
					<Hero />
					<TutorialSteps />
				</main>
			</div>
		</UserLayout>
	);
};

export default TutorialPage;
