import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

function NavBar() {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light');
		}
	};
	return (
		<>
			<header className='relative flex justify-between items-center mt-6 font-serif px-1 after:absolute after:content-[""] after:w-full after:h-[2px] after:bg-black after:-bottom-2'>
				<div className='font-bold hover:scale-105 focus:scale-105 active:scale-105 transition'>
					<a className='' href='#'>
						Jonathan Aplacador
					</a>
				</div>
				<nav className='flex space-x-6 items-center'>
					<ul className='hidden flex-row lg:flex space-x-6'>
						<li className='hover:font-black focus:font-black active:font-black transition'>
							<a href='#about'>About</a>
						</li>
						<li className='hover:font-black focus:font-black active:font-black transition'>
							<a href='#projects'>Projects</a>
						</li>
						<li className='hover:font-black focus:font-black active:font-black transition'>
							<a href='#contact'>Contact</a>
						</li>
						<li className='hover:font-black focus:font-black active:font-black transition'>
							<a href='#contact'>Resume</a>
						</li>
					</ul>
					<div className='flex space-x-4 text-black dark:text-white'>
						<button onClick={switchTheme}>
							<Icon
								icon={`${theme === 'dark' ? 'bytesize:moon' : 'carbon:light'}`}
								className='hover:scale-105 focus:scale-105 active::scale-105'
								height='30'
							/>
						</button>
						<button
							onClick={() => {
								setIsOverlayOpen(!isOverlayOpen);
							}}
							className='lg:hidden hover:scale-105 focus:scale-105 active::scale-105'
						>
							<Icon icon='bx:menu' height='30' />
						</button>
					</div>
				</nav>
			</header>
			{/* Overlay */}
			<div
				className={`h-full ${
					isOverlayOpen ? 'w-full' : 'w-0'
				} fixed z-10 left-0 -top-12 bg-white dark:bg-black overflow-x-hidden transition-all`}
			>
				<header className='w-full flex justify-between px-2 py-4 items-center border-b-2 border-black dark:border-white'>
					<h2 className='font-serif font-bold'>Jonathan Aplacador</h2>
					<div className='flex items-center space-x-2'>
						<button onClick={switchTheme}>
							<Icon
								icon={`${theme === 'dark' ? 'bytesize:moon' : 'carbon:light'}`}
								className='text-black dark:text-white text-3xl hover:scale-105 focus:scale-105 active::scale-105'
							/>
						</button>
						<button
							onClick={() => {
								setIsOverlayOpen(!isOverlayOpen);
							}}
						>
							<Icon
								icon='bi:x'
								className='text-black dark:text-white text-4xl hover:scale-105 focus:scale-105 active::scale-105'
							/>
						</button>
					</div>
				</header>
				<nav>
					<ul className='w-full h-[80vh] grid place-content-center gap-8'>
						<li
							onClick={() => {
								setIsOverlayOpen(!isOverlayOpen);
							}}
							className='font-bold text-xl font-serif text-center hover:font-black focus:font-black active:font-black transition'
						>
							<a href='#about'>About</a>
						</li>
						<li
							onClick={() => {
								setIsOverlayOpen(!isOverlayOpen);
							}}
							className='font-bold text-xl font-serif text-center hover:font-black focus:font-black active:font-black transition'
						>
							<a href='#projects'>Projects</a>
						</li>
						<li
							onClick={() => {
								setIsOverlayOpen(!isOverlayOpen);
							}}
							className='font-bold text-xl font-serif text-center hover:font-black focus:font-black active:font-black transition'
						>
							<a href='#contact'>Contact</a>
						</li>
						<li
							onClick={() => {
								setIsOverlayOpen(!isOverlayOpen);
							}}
							className='font-bold text-xl font-serif text-center hover:font-black focus:font-black active:font-black transition'
						>
							<a href='#contact'>Resume</a>
						</li>
					</ul>
				</nav>
				<footer className='w-full flex justify-between px-4 py-4 items-center border-t-2 border-black dark:border-white'>
					<h2 className='font-serif font-bold text-xl'>Socials:</h2>
					<div className='flex items-center space-x-4'>
						<a href='#' className='hover:scale-105 transition-all'>
							<Icon icon='cib:linkedin' height='min(65px,7vw)' />
						</a>
						<a href='#' className='hover:scale-105 transition-all'>
							<Icon icon='akar-icons:facebook-fill' height='min(65px,7vw)' />
						</a>
						<a href='#' className='hover:scale-105 transition-all'>
							<Icon icon='mdi:gmail' height='min(65px,7vw)' />
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}

export default NavBar;
