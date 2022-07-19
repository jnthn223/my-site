import React from 'react';

interface SectionHeaderProps {
	title: string;
	number: string;
}

function SectionHeader({ title, number }: SectionHeaderProps) {
	return (
		<header className='mb-8'>
			<h2 className='relative text-xl font-serif after:content-[""] after:absolute after:w-full after:h-px after:bg-black after:-bottom-2 after:left-0'>
				<span className='font-bold'>{number}</span> | {title}
			</h2>
		</header>
	);
}

export default SectionHeader;
