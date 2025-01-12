"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import UserLayout from "@/layouts/user-layout";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", subject: "", message: "" });
		alert("Thank you for your message. We will get back to you soon!");
	};

	return (
		<UserLayout>
			<div className="min-h-screen bg-white text-black font-sans">
				<main>
					<Hero />
					<ContactSection
						formData={formData}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				</main>
			</div>
		</UserLayout>
	);
};

const Hero = () => (
	<section className="container mx-auto px-6 pt-12 text-center">
		<motion.h2
			className="text-4xl font-bold mb-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			Contact Us
		</motion.h2>
		<motion.p
			className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			Have questions or need assistance? We're here to help. Reach out to our
			support team.
		</motion.p>
	</section>
);

interface ContactSectionProps {
	formData: {
		name: string;
		email: string;
		subject: string;
		message: string;
	};
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: React.FormEvent) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({
	formData,
	handleChange,
	handleSubmit,
}) => (
	<section className="container mx-auto px-6">
		<div className="max-w-4xl mx-auto flex flex-wrap">
			<div className="w-full md:w-1/2 mb-8 md:mb-0">
				<ContactInfo />
			</div>
			<div className="w-full md:w-1/2">
				<ContactForm
					formData={formData}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	</section>
);

const ContactInfo = () => (
	<div className="space-y-6">
		<motion.div
			className="flex items-center"
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Mail className="w-6 h-6 mr-4" />
			<div>
				<h3 className="font-semibold">Email</h3>
				<p className="text-gray-600">support@uitregulations.edu</p>
			</div>
		</motion.div>
		<motion.div
			className="flex items-center"
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.1 }}
		>
			<Phone className="w-6 h-6 mr-4" />
			<div>
				<h3 className="font-semibold">Phone</h3>
				<p className="text-gray-600">+1 (123) 456-7890</p>
			</div>
		</motion.div>
		<motion.div
			className="flex items-center"
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<MapPin className="w-6 h-6 mr-4" />
			<div>
				<h3 className="font-semibold">Address</h3>
				<p className="text-gray-600">
					123 University Ave, Campus Building, Room 456
				</p>
			</div>
		</motion.div>
	</div>
);

interface ContactFormProps {
	formData: {
		name: string;
		email: string;
		subject: string;
		message: string;
	};
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
	formData,
	handleChange,
	handleSubmit,
}) => (
	<motion.form
		onSubmit={handleSubmit}
		className="space-y-4"
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<div>
			<label htmlFor="name" className="block mb-2 font-semibold">
				Name
			</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				required
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
			/>
		</div>
		<div>
			<label htmlFor="email" className="block mb-2 font-semibold">
				Email
			</label>
			<input
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				required
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
			/>
		</div>
		<div>
			<label htmlFor="subject" className="block mb-2 font-semibold">
				Subject
			</label>
			<input
				type="text"
				id="subject"
				name="subject"
				value={formData.subject}
				onChange={handleChange}
				required
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
			/>
		</div>
		<div>
			<label htmlFor="message" className="block mb-2 font-semibold">
				Message
			</label>
			<textarea
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				required
				rows={4}
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
			></textarea>
		</div>
		<button
			type="submit"
			className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
		>
			Send Message
			<Send className="ml-2 w-4 h-4" />
		</button>
	</motion.form>
);

export default ContactPage;
