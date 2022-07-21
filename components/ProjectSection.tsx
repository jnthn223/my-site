import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import projectData from '../data/projects.json';
import useWindowDimensions from '../hooks/useWindowDimension';
import { Icon } from '@iconify/react';

interface IProject {
	id: string;
	title: string;
	type: string;
	photoURL: string;
	description: string;
	technologies: string[];
	liveLink: string;
	githubLink: string;
}

function ProjectSection() {
	const projects: IProject[] = projectData;
	return (
		<section>
			<SectionHeader number='02' title='Projects' />
			{projects?.map((project: IProject) => {
				let { id, title, type, photoURL, description, technologies, liveLink, githubLink } = project;
				return (
					<ProjectCard
						key={id}
						project={{ id, title, type, photoURL, description, technologies, liveLink, githubLink }}
					/>
				);
			})}
		</section>
	);
}

interface ProjectCardProps {
	project: IProject;
}

function ProjectCard({ project }: ProjectCardProps) {
	const { width, height } = useWindowDimensions();

	return (
		<article
			className='grid gap-8  mb-8 bg-red-200'
			style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(342px, 1fr))' }}
		>
			<div className='relative  h-[70%] lg:h-[100%]'>
				<Image
					src={project.photoURL}
					layout='responsive'
					width={'100%'}
					height={'100%'}
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div>
				<p className='text-[#7D7878] uppercase tracking-[0.075em] text-[18px] leading-[2.0] mb-2 lg:mb-4'>
					{project.type}
				</p>
				<h3 className='font-serif text-2xl font-bold leading-[2.0] tracking-[0.075em] mb-7 lg:mb-8'>
					{project.title}
				</h3>
				<p className='text-[#474747] leading-[1.5] mb-6 text-base'>{project.description}</p>
				<div
					className='grid w-[80%] mb-7'
					style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}
				>
					{project.technologies.map((tech) => (
						<p key={tech}>{tech}</p>
					))}
				</div>
				<div className='flex space-x-4 items-center'>
					<a className='group btn-outline flex space-x-2 transition ' href='#'>
						<p>Live Site</p>
						<Icon
							icon='bi:box-arrow-in-up-right'
							className='text-black group-hover:text-white'
							height='24'
						/>
					</a>
					<a className='btn-naked transition' href='#'>
						Github Code
					</a>
				</div>
			</div>
		</article>
	);
}

export default ProjectSection;
