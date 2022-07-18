import React from 'react';
import { Icon } from '@iconify/react';

function NavBar() {
	return (
		<header className='relative flex justify-between items-center mt-6 font-serif px-1 after:absolute after:content-[""] after:w-full after:h-[2px] after:bg-black after:-bottom-2'>
			<div className='font-bold hover:scale-105 focus:scale-105 active:scale-105 transition'>
				<a className='' href='#'>
					Jonathan Aplacador
				</a>
			</div>
			<nav className='flex space-x-6 items-center'>
				<ul className='hidden flex-row lg:flex space-x-6'>
					<li className='hover:font-black focus:font-black active:font-black transition'>
						<a href='#'>About</a>
					</li>
					<li className='hover:font-black focus:font-black active:font-black transition'>
						<a href='#'>Projects</a>
					</li>
					<li className='hover:font-black focus:font-black active:font-black transition'>
						<a href='#'>Contact</a>
					</li>
				</ul>
				<div className='flex space-x-4'>
					<button className='hover:scale-105 focus:scale-105 active::scale-105'>
						<Icon icon='bytesize:moon' color='black' height='30' />
					</button>
					<button className='lg:hidden hover:scale-105 focus:scale-105 active::scale-105'>
						<Icon icon='bx:menu' color='black' height='30' />
					</button>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
