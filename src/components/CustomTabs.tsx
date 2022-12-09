import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

type Project = {
	name: string;
	description: string;
	href: string;
	repository?: string;
};

const projects: Project[] = [
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
	{
		name: 'Rumah Cahaya FLP Saudi Arabia',
		description:
			'Rumah Cahaya FLP Saudi Arabia is a online library where people can read books anytime and anywhere.',
		href: 'https://rumahcahayaflpsaudi.com',
	},
	{
		name: 'Manajemen Kepatuhan',
		description:
			'Manajemen Kepatuhan is a web application for audit result records and follow-up monitoring.',
		href: 'https://manajemenkepatuhan.com',
	},
];

const links = [
	{
		href: 'https://github.com/taufiqfebriant',
		name: 'GitHub',
	},
	{
		href: 'https://dribbble.com/taufiqfebriant',
		name: 'Dribbble',
	},
	{
		href: 'https://www.linkedin.com/in/taufiqfebriant',
		name: 'LinkedIn',
	},
	{
		href: 'https://twitter.com/taufiqfebriant',
		name: 'Twitter',
	},
];

const twitterLink = links.find(link => link.name === 'Twitter');
const linkedinLink = links.find(link => link.name === 'LinkedIn');

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
							Links
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
								<h1 className="text-xl md:text-2xl font-bold text-[#f5f5f5]">
									{project.name}
								</h1>

								<p className="text-sm text-[#888]">{project.description}</p>

								<div className="mt-4 flex gap-x-4 text-sm">
									<a
										href={project.href}
										target="_blank"
										rel="noreferrer"
										className="underline"
									>
										Go to website
									</a>

									{project.repository ? (
										<a
											href={project.repository}
											target="_blank"
											rel="noreferrer"
											className="underline"
										>
											GitHub repository
										</a>
									) : null}
								</div>
							</div>
						</article>
					))}
				</Tab.Panel>
				<Tab.Panel as="ul" className="px-4 list-inside list-disc">
					{links.map(link => (
						<li key={link.name}>
							<a
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="underline"
							>
								{link.name}
							</a>
						</li>
					))}
				</Tab.Panel>
				<Tab.Panel className="px-4">
					<p>
						If you want to talk about something, feel free to contact me. You
						can:
					</p>
					<ul className="list-inside list-disc">
						<li>
							DM me on{' '}
							<a
								href={twitterLink?.href}
								target="_blank"
								rel="noreferrer"
								className="underline"
							>
								{twitterLink?.name}
							</a>{' '}
							or{' '}
							<a
								href={linkedinLink?.href}
								target="_blank"
								rel="noreferrer"
								className="underline"
							>
								{linkedinLink?.name}
							</a>
						</li>

						<li>
							Email me at{' '}
							<a href="mailto:hello@taufiqf.com" className="underline">
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
