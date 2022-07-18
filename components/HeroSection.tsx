import Image from 'next/image';
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimension';
import astronaut_mobile from '../images/Astronaut-Mobile.png';
import astronaut_desktop from '../images/Astronaut-Desktop.png';

function HeroSection() {
	const { width, height } = useWindowDimensions();
	return (
		<div className='grid place-items-center font-light  text-center'>
			<h1 className='w-[90%] md:w-full  h-1-grow'>
				Build <span className='font-serif font-bold'>Web Applications</span> For
			</h1>
			<div className='relative astronaut-frame-grow bg-[#D6D6D6] overflow-hidden'>
				<div className='absolute top-0 left-0 translate-x-10 translate-y-3'>
					<Image
						src={width && width <= 768 ? astronaut_mobile : astronaut_desktop}
						layout='fixed'
					></Image>
				</div>
			</div>
			<h1 className='w-[90%] md:w-full  h-1-grow'>
				The <span className='font-serif font-bold'>World</span> to{' '}
				<span className='font-serif font-bold'>Experience</span>.
			</h1>
		</div>
	);
}

export default HeroSection;
