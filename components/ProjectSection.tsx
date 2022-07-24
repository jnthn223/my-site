import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import projectData from '../data/projects.json';
import useWindowDimensions from '../hooks/useWindowDimension';
import project1 from '../images/project1.png';
import { Icon } from '@iconify/react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
			{projects?.map((project: IProject, i) => {
				let { id, title, type, photoURL, description, technologies, liveLink, githubLink } = project;

				return (
					<ProjectCard
						key={id}
						direction={i % 2 === 0 ? 'right' : 'left'}
						project={{ id, title, type, photoURL, description, technologies, liveLink, githubLink }}
					/>
				);
			})}
		</section>
	);
}

interface ProjectCardProps {
	project: IProject;
	direction: 'left' | 'right';
}

function ProjectCard({ project, direction }: ProjectCardProps) {
	const { width, height } = useWindowDimensions();
	const articleRef = useRef<HTMLDivElement | null>(null);
	// const { isVisible } = useIntersectionObserver(articleRef.current && articleRef.current );
	const [isCardVisible, setIsCardVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				setIsCardVisible(entries[0].isIntersecting);
				if (entries[0].isIntersecting) observer.unobserve(entries[0].target);
			},
			{ threshold: 0.5, rootMargin: '100px' }
		);
		if (articleRef.current) {
			observer.observe(articleRef.current);
		}
	}, []);

	return (
		<article
			ref={articleRef}
			id='projects'
			className={`grid gap-12 my-16  lg:my-28 relative ease-in duration-300  ${
				isCardVisible ? 'translate-y-0 opacity-1' : 'translate-y-1/4 opacity-0'
			} `}
			style={{
				gridTemplateColumns: 'repeat(auto-fit, minmax(342px, 1fr))',
				gridTemplateRows: 'repeat(auto-fit, 1fr)',
			}}
		>
			{width && width > 814 ? (
				<>
					{direction === 'left' && (
						<>
							<ProjectCardImg photo={project.photoURL} />
							<ProjectCardContent
								type={project.type}
								title={project.title}
								desc={project.description}
								technologies={project.technologies}
							/>
						</>
					)}
					{direction === 'right' && (
						<>
							<ProjectCardContent
								type={project.type}
								title={project.title}
								desc={project.description}
								technologies={project.technologies}
							/>
							<ProjectCardImg photo={project.photoURL} />
						</>
					)}
				</>
			) : (
				<>
					<ProjectCardImg photo={project.photoURL} />
					<ProjectCardContent
						type={project.type}
						title={project.title}
						desc={project.description}
						technologies={project.technologies}
					/>
				</>
			)}
		</article>
	);
}
interface IProjectCardImg {
	photo: string;
}

function ProjectCardImg({ photo }: IProjectCardImg) {
	return (
		<div className='img-box group'>
			<img src={photo} />
		</div>
	);
}
interface IProjectCardContent {
	type: string;
	title: string;
	desc: string;
	technologies: string[];
}

function ProjectCardContent({ type, title, desc, technologies }: IProjectCardContent) {
	return (
		<div>
			<p className='text-[#7D7878] uppercase tracking-[0.075em] text-[18px] leading-[2.0] mb-1 lg:mb-2'>
				{type}
			</p>
			<h3 className='font-serif text-2xl font-black leading-[2.0] tracking-[0.075em] mb-1 lg:mb-2'>
				{title}
			</h3>
			<p className='text-[#474747] leading-[1.5] mb-6 text-base'>{desc}</p>
			<div
				className='grid w-[80%] mb-7'
				style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}
			>
				{technologies.map((tech) => (
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
				<a className='btn-naked transition-all' href='#'>
					Github Code
				</a>
			</div>
		</div>
	);
}

export default ProjectSection;
