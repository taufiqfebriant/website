import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

const projects = [
	{
		name: 'underlib',
		description: 'Find Spotify playlists with tags for better discoverability',
		href: 'https://www.underlib.com',
		repository: 'https://github.com/taufiqfebriant/underlib',
	},
	{
		name: 'kamoos',
		description: 'The Indonesian version of "Urban Dictionary" website',
		href: 'https://kamoos.club',
		repository: 'https://github.com/taufiqfebriant/kamoos',
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
								'px-4 py-2 font-medium transition-colors',
								{
									'border-b border-[#f5f5f5] text-[#f5f5f5]': selected,
								},
								{ 'text-[#888] hover:text-[#f5f5f5]': !selected }
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
								'px-4 py-2 font-medium transition-colors',
								{
									'border-b border-[#f5f5f5] text-[#f5f5f5]': selected,
								},
								{ 'text-[#888] hover:text-[#f5f5f5]': !selected }
							)}
						>
							Contact
						</button>
					)}
				</Tab>
			</Tab.List>
			<Tab.Panels className="mt-4">
				<Tab.Panel className="flex flex-col gap-y-4">
					{projects.map(project => (
						<article
							key={project.name}
							className="flex h-36 items-center rounded-md border border-[#232b2b]"
						>
							<div className="px-4">
								<h1 className="text-2xl font-bold text-[#f5f5f5]">
									{project.name}
								</h1>

								<p className="text-sm text-[#888]">{project.description}</p>

								<div className="mt-4 flex gap-x-4 text-sm">
									<a
										href={project.href}
										target="_blank"
										rel="noreferrer"
										className="text-[#1d9bf0] underline"
									>
										Go to website
									</a>

									<a
										href={project.repository}
										target="_blank"
										rel="noreferrer"
										className="text-[#1d9bf0] underline"
									>
										GitHub repository
									</a>
								</div>
							</div>
						</article>
					))}
				</Tab.Panel>
				<Tab.Panel className="px-4 text-[#f5f5f5]">
					<p>
						If you want to talk about something, feel free to contact me. You
						can:
					</p>
					<ul className="list-inside list-disc">
						<li>
							DM me on{' '}
							<a
								href="https://twitter.com/taufiqfebriant"
								target="_blank"
								rel="noreferrer"
								className="text-[#1d9bf0] underline"
							>
								Twitter
							</a>{' '}
							or{' '}
							<a
								href="https://www.linkedin.com/in/taufiqfebriant"
								target="_blank"
								rel="noreferrer"
								className="text-[#1d9bf0] underline"
							>
								LinkedIn
							</a>
						</li>

						<li>
							Email me at{' '}
							<a
								href="mailto:hello@taufiqf.com"
								className="text-[#1d9bf0] underline"
							>
								hello@taufiqf.com
							</a>
						</li>
					</ul>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default CustomTabs;
