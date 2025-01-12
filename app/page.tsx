"use client";

import DefaultLayout from "@/layouts/default-layout";
import FeatureCard from "@/components/shared/feature-card";
import TestimonialCard from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";
import { Bell, BookOpen, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/lib/store";

export default function Home() {
	const { user } = useAppSelector((state) => state.auth);
	return (
		<DefaultLayout>
			<main className="flex-grow">
				<section className="bg-[url('/hero-background.jpg')] bg-cover bg-center py-20">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold text-foreground mb-4">
							UIT Regulations
						</h2>
						<p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
							Explore and understand all the regulations that govern your
							academic life at UIT.
						</p>
						<Link href={`${user ? "/home" : "/login"}`}>
							<Button size="lg" className="text-sm px-8">
								Start Searching
							</Button>
						</Link>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20 bg-muted">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							Key Features
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<FeatureCard
								icon={<Search className="h-6 w-6" />}
								title="Smart Search"
								description="Find relevant regulations quickly with our powerful keyword search."
							/>
							<FeatureCard
								icon={<Filter className="h-6 w-6" />}
								title="Department Filtering"
								description="Easily filter regulations by specific departments or faculties."
							/>
							<FeatureCard
								icon={<Bell className="h-6 w-6" />}
								title="Latest Updates"
								description="Stay informed with real-time notifications on regulation changes."
							/>
							<FeatureCard
								icon={<BookOpen className="h-6 w-6" />}
								title="Simplified Explanations"
								description="Understand complex regulations with our easy-to-read summaries."
							/>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							What Students Say
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<TestimonialCard
								quote="ReguLook has saved me so much time and stress. I can finally understand all the university policies!"
								author="Linh Nguyen, 3rd Year Student"
							/>
							<TestimonialCard
								quote="As a freshman, ReguLook helped me navigate through all the new rules and requirements easily."
								author="Minh Tran, 1st Year Student"
							/>
							<TestimonialCard
								quote="The notification feature is a game-changer. I'm always up-to-date with the latest regulations."
								author="Hoa Pham, 4th Year Student"
							/>
						</div>
					</div>
				</section>

				{/* Secondary CTA Section */}
				<section className="py-20 bg-muted">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-4">
							Ready to Simplify Your Academic Life?
						</h2>
						<p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
							Join thousands of UIT students who are already benefiting from
							ReguLook. Start exploring regulations effortlessly today!
						</p>
						<Link href={"/home"}>
							<Button size="lg" className="text-sm px-8">
								Get Started Now
							</Button>
						</Link>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-muted py-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-muted-foreground mb-4 md:mb-0">
							&copy; 2025 UIT University. All rights reserved.
						</p>
						<nav>
							<ul className="flex space-x-6">
								<li>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</footer>
		</DefaultLayout>
	);
}
