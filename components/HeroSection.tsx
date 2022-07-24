import Image from 'next/image';
import React, { MouseEventHandler, useEffect, useRef } from 'react';
import useWindowDimensions from '../hooks/useWindowDimension';
import astronaut_mobile from '../images/Astronaut-Mobile.png';
import astronaut_desktop from '../images/Astronaut-Desktop.png';

function HeroSection() {
	const { width, height } = useWindowDimensions();
	const astronautImg = useRef<null | HTMLDivElement>(null);

	const onMouseMove = (e: any) => {
		const x = (window.innerWidth - e.screenX * -5) / 100;
		const y = (window.innerHeight - e.screenY * -5) / 100;

		if (astronautImg.current) {
			astronautImg.current.style.transform = `translate(${x}px, ${y}px)`;
		}
	};

	return (
		<section onMouseMove={onMouseMove} className='grid place-items-center font-light  text-center'>
			<h1 className='w-[90%] md:w-full  h-1-grow'>
				Build <span className='font-serif font-bold'>Web Applications</span> For
			</h1>
			<div className='circle-frame'>
				<div className='relative astronaut-frame-grow bg-[#D6D6D6] overflow-hidden'>
					<div ref={astronautImg} className='absolute top-0 left-10  '>
						<Image
							src={width && width <= 1024 ? astronaut_mobile : astronaut_desktop}
							layout='fixed'
							priority
						></Image>
					</div>
				</div>
				{width && width >= 689 && (
					<TextSpinning utilityClasses='absolute bottom-[20px] right-0 translate-x-[50%]' />
				)}
			</div>
			<h1 className='w-[90%] md:w-full  h-1-grow'>
				The <span className='font-serif font-bold'>World</span> to{' '}
				<span className='font-serif font-bold'>Experience</span>.
			</h1>
			<div className='relative w-full h-full  border-black'>
				{width && width < 689 && <TextSpinning utilityClasses='mt-6' />}
			</div>
		</section>
	);
}

interface ITextSpinning {
	utilityClasses?: string;
}

function TextSpinning({ utilityClasses }: ITextSpinning) {
	const scrollText = 'Scroll To See More ';

	return (
		<div className={`circle ${utilityClasses}`}>
			<p className='absolute w-full h-full animate-spinningText'>
				{scrollText.split('').map((char, i) => (
					<span
						className={`absolute left-[50%]  text-[1.2em] inline `}
						style={{ transformOrigin: '0 85px', transform: `rotate(${i * 19}deg)` }}
						key={char + i}
					>
						{char}
					</span>
				))}
			</p>
		</div>
	);
}

export default HeroSection;
