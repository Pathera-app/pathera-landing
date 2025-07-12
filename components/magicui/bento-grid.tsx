import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
	ArrowRightIcon,
	Users,
	FileText,
	Briefcase,
	BookOpen,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Integrations } from "@/components/ui/integrations";
import { Label } from "@/components/ui/label";

export const CARDS = [
	{
		Icon: Users,
		name: "AI Interviewer",
		description: "Practice with our AI-powered interviewer that simulates real job interviews and provides instant feedback to improve your performance.",
		href: "#",
		cta: "Start Practice",
		className: "col-span-3 lg:col-span-2",
		background: (
			<Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md border border-border border-r-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
				<CardHeader>
					<CardTitle>AI Interview Practice</CardTitle>
					<CardDescription>
						Get real-time feedback on your interview responses
					</CardDescription>
				</CardHeader>
				<CardContent className="-mt-4">
					<Label>Practice Questions</Label>
					<Input
						type="text"
						placeholder="Tell me about yourself..."
						className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
					/>
				</CardContent>
			</Card>
		),
	},
	{
		Icon: Briefcase,
		name: "Work Experience Finder",
		description: "Discover relevant work experience opportunities matched to your career goals and skill level.",
		href: "#",
		cta: "Find Opportunities",
		className: "col-span-3 lg:col-span-1",
		background: (
			<Command className="group-hover:-translate-x-10 absolute top-10 right-10 w-[70%] origin-to translate-x-0 border border-border p-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
				<Input placeholder="Search opportunities..." />
				<div className="mt-1 cursor-pointer">
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Technology
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Finance
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Engineering
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Law
					</div>
				</div>
			</Command>
		),
	},
	{
		Icon: FileText,
		name: "CV Builder",
		description: "Create a professional, ATS-friendly CV with our intelligent builder that highlights your key achievements and skills.",
		href: "#",
		cta: "Build CV",
		className: "col-span-3 lg:col-span-2",
		background: (
			<Integrations className="absolute top-4 right-2 h-[300px] w-[600px] border-none pl-28 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 md:pl-0" />
		),
	},
	{
		Icon: BookOpen,
		name: "Learning Resources",
		description: "Access curated learning materials and courses tailored to your career path and skill development needs.",
		href: "#",
		cta: "Start Learning",
		className: "col-span-3 lg:col-span-1",
		background: (
			<Command className="group-hover:-translate-x-10 absolute top-10 right-10 w-[70%] origin-to translate-x-0 border border-border p-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
				<Input placeholder="Search courses..." />
				<div className="mt-1 cursor-pointer">
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Programming
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Data Science
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Design
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Business
					</div>
				</div>
			</Command>
		),
	}
];

const BentoGrid = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
				className,
			)}
		>
			{children}
		</div>
	);
};

const BentoCard = ({
	name,
	className,
	background,
	Icon,
	description,
	href,
	cta,
}: {
	name: string;
	className: string;
	background: ReactNode;
	Icon: any;
	description: string;
	href: string;
	cta: string;
}) => (
	<div
		key={name}
		className={cn(
			"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-border/60",
			"bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
			className,
		)}
	>
		<div>{background}</div>
		<div className="group-hover:-translate-y-10 pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300">
			<Icon className="h-12 w-12 origin-left text-white/70 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white" />
			<h3 className="font-semibold text-neutral-300 text-xl">{name}</h3>
			<p className="max-w-lg text-neutral-400">{description}</p>
		</div>

		<div
			className={cn(
				"absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
			)}
		>
			<Link
				href={href}
				className={buttonVariants({
					size: "sm",
					variant: "ghost",
					className: "cursor-pointer",
				})}
			>
				{cta}
				<ArrowRightIcon className="ml-2 h-4 w-4" />
			</Link>
		</div>
		<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
	</div>
);

export { BentoCard, BentoGrid };