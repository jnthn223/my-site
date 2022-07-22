import React from 'react';
import SectionHeader from './SectionHeader';

function SkillSection() {
	const skills = [
		'React.js',
		'Next.js',
		'Express.js',
		'Javascript',
		'Typescript',
		'MongoDB',
		'Tailwind CSS',
	];
	return (
		<section id='skills'>
			<SectionHeader title='Technology Skills' number='03' />
			<div className=' grid place-items-center my-[25vh] '>
				<div className='flex flex-wrap justify-evenly items-center gap-16 md:gap-24'>
					{skills.map((skill) => (
						<h3 key={skill} className='font-serif text-3xl md:text-5xl text-justify'>
							{skill}
						</h3>
					))}
				</div>
			</div>
		</section>
	);
}

export default SkillSection;
