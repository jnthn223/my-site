import React from 'react';

interface SectionHeaderProps {
	title: string;
	number: string;
}

function SectionHeader({ title, number }: SectionHeaderProps) {
	const HeaderTextGrowStyle = {
		fontSize: 'clamp(1.5rem,3vw,2rem)',
	};
	return (
		<header className='mb-8'>
			<h2
				style={HeaderTextGrowStyle}
				className='relative  font-serif after:content-[""] after:absolute after:w-full after:h-px after:bg-black after:-bottom-2 after:left-0'
			>
				<span className='font-bold'>{number}</span> | {title}
			</h2>
		</header>
	);
}

export default SectionHeader;
