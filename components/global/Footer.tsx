import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-border border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 pt-16 pb-8 md:pb-0 lg:px-8 lg:pt-32">
			<div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 right-1/2 left-1/2 h-1.5 w-8 rounded-full bg-foreground"></div>

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<div className="flex flex-col items-start justify-start md:max-w-[200px]">
					<p className="mt-4 text-start text-muted-foreground text-sm">
						Your complete career development platform.
					</p>
					<span className="mt-4 flex items-center text-neutral-200 text-sm">
						Made by{" "}
						<Link
							href="https://pathera.ai"
							className="ml-1 font-semibold hover:underline"
						>
							Pathera Team &hearts;
						</Link>
					</span>
					<div className="flex items-center gap-1 pt-2 text-muted-foreground">
						<Link
							href="https://github.com/Pathera-app"
							target="_blank"
						>
							<Github className="size-4 hover:text-white" />
						</Link>
						<Link
							href="https://www.linkedin.com/company/pathera"
							target="_blank"
						>
							<Linkedin className="size-4 hover:text-white" />
						</Link>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<div className="">
							<h3 className="font-medium text-base text-white">Product</h3>
							<ul className="mt-4 text-muted-foreground text-sm">
								<li className="mt-2">
									<Link
										href="#features"
										className="transition-all duration-300 hover:text-foreground"
									>
										Features
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="#pricing"
										className="transition-all duration-300 hover:text-foreground"
									>
										Pricing
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="#testimonials"
										className="transition-all duration-300 hover:text-foreground"
									>
										Testimonials
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/integrations"
										className="transition-all duration-300 hover:text-foreground"
									>
										Integrations
									</Link>
								</li>
							</ul>
						</div>
						<div className="mt-10 flex flex-col md:mt-0">
							<h3 className="font-medium text-base text-white">
								Career Resources
							</h3>
							<ul className="mt-4 text-muted-foreground text-sm">
								<li>
									<Link
										href="#"
										className="transition-all duration-300 hover:text-foreground"
									>
										Interview Prep
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="#"
										className="transition-all duration-300 hover:text-foreground"
									>
										Resume Tips
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="#"
										className="transition-all duration-300 hover:text-foreground"
									>
										Career Guides
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="#"
										className="transition-all duration-300 hover:text-foreground"
									>
										Skill Assessment
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<div className="">
							<h3 className="font-medium text-base text-white">Resources</h3>
							<ul className="mt-4 text-muted-foreground text-sm">
								<li className="mt-2">
									<Link
										href="/blog"
										className="transition-all duration-300 hover:text-foreground"
									>
										Blog
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/help"
										className="transition-all duration-300 hover:text-foreground"
									>
										Support
									</Link>
								</li>
							</ul>
						</div>
						<div className="mt-10 flex flex-col md:mt-0">
							<h3 className="font-medium text-base text-white">Company</h3>
							<ul className="mt-4 text-muted-foreground text-sm">
								<li className="">
									<Link
										href="/about"
										className="transition-all duration-300 hover:text-foreground"
									>
										About Us
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/privacy"
										className="transition-all duration-300 hover:text-foreground"
									>
										Privacy Policy
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/terms"
										className="transition-all duration-300 hover:text-foreground"
									>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8 w-full border-border/40 border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
				<p className="mt-8 text-muted-foreground text-sm md:mt-0">
					&copy; {new Date().getFullYear()} Pathera. All rights reserved.
				</p>
			</div>

			<div className="hidden h-[20rem] items-center justify-center md:flex lg:h-[20rem]">
				<TextHoverEffect text="Pathera" />
			</div>
		</footer>
	);
};

export default Footer; 