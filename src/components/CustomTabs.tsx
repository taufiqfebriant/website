import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

const projects = [
	{
		name: "underlib",
		description:
			"Website for finding Spotify playlists with tags for better discoverability",
		href: "https://www.underlib.com",
		repository: "https://github.com/taufiqfebriant/underlib",
	},
	{
		name: "kamoos",
		description: "Indonesian version of Urban Dictionary",
		href: "https://kamoos.club",
		repository: "https://github.com/taufiqfebriant/kamoos",
	},
];

const CustomTabs = () => {
	return (
		<Tab.Group>
			<Tab.List className="mt-8 border-b border-[#232b2b]">
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={clsx(
								"px-4 py-2 font-medium transition-colors",
								{
									"border-b border-[#f5f5f5] text-[#f5f5f5]": selected,
								},
								{ "hover:text-[#f5f5f5] text-[#888]": !selected }
							)}
						>
							Projects
						</button>
					)}
				</Tab>
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={clsx(
								"px-4 py-2 font-medium transition-colors",
								{
									"border-b border-[#f5f5f5] text-[#f5f5f5]": selected,
								},
								{ "hover:text-[#f5f5f5] text-[#888]": !selected }
							)}
						>
							Contact
						</button>
					)}
				</Tab>
			</Tab.List>
			<Tab.Panels className="mt-4">
				<Tab.Panel className="flex flex-col gap-y-4">
					{projects.map((project) => (
						<article
							key={project.name}
							className="border border-[#232b2b] rounded-md h-36 flex items-center"
						>
							<div className="px-4">
								<h1 className="text-[#f5f5f5] font-bold text-2xl">
									{project.name}
								</h1>

								<p className="text-sm text-[#888]">{project.description}</p>

								<div className="mt-4 flex gap-x-4 text-sm">
									<a
										href={project.href}
										target="_blank"
										rel="noreferrer"
										className="hover:underline text-[#1d9bf0]"
									>
										Go to website
									</a>

									<a
										href={project.repository}
										target="_blank"
										rel="noreferrer"
										className="hover:underline text-[#1d9bf0]"
									>
										GitHub repository
									</a>
								</div>
							</div>
						</article>
					))}
				</Tab.Panel>
				<Tab.Panel className="text-[#f5f5f5] px-4">
					<p>
						If you want to talk about something, feel free to contact me. You
						can:
					</p>
					<ul className="list-disc list-inside">
						<li>
							DM me on{" "}
							<a
								href="https://twitter.com/taufiqfebriant"
								target="_blank"
								rel="noreferrer"
								className="hover:underline text-[#1d9bf0]"
							>
								Twitter
							</a>{" "}
							or{" "}
							<a
								href="https://www.linkedin.com/in/taufiqfebriant"
								target="_blank"
								rel="noreferrer"
								className="hover:underline text-[#1d9bf0]"
							>
								LinkedIn
							</a>
						</li>

						<li>
							Email me at{" "}
							<a
								href="mailto:hello@taufiq.co.id"
								className="hover:underline text-[#1d9bf0]"
							>
								hello@taufiq.co.id
							</a>
						</li>
					</ul>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default CustomTabs;
