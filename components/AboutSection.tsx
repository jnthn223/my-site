import React from 'react';
import SectionHeader from './SectionHeader';

function AboutSection() {
	return (
		<section className=''>
			<SectionHeader number='01' title='About' />
			<h3 className='about-text-grow text-center leading-[2.0] w-[85%] mx-auto pt-12'>
				<span className='font-serif font-bold'>Hello Everyone!</span> My name is{' '}
				<span className='font-serif font-bold'>Jonathan Aplacador</span>. I am a{' '}
				<span className='font-serif font-bold'>Full-Stack Web Developer</span>. I am currently studying{' '}
				<span className='font-serif font-bold'>Bachelor of Science in Information Technology</span>, where
				I get about 30% of my knowledge in building website. I describe myself as a{' '}
				<span className='font-serif font-bold'>self-learner</span> and my goal is to build experience and
				improve my skills in my craft. <span className='font-serif font-bold'>Please contact me</span> if
				you’re interested in my work
			</h3>
		</section>
	);
}

export default AboutSection;
