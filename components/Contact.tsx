import { Icon } from '@iconify/react';
import React from 'react';

function Contact() {
	return (
		<section className='min-h-screen  bg-black text-white grid place-content-center gap-16'>
			<h3 className='font-serif text-center text-[32px] lg:text-[48px] w-[85%] lg:w-[50%] m-auto'>
				If you’re interested in hiring me, send me an email at{' '}
				<span className='font-bold break-words underline cursor-pointer'>
					aplacadorjonathan@gmail.com{' '}
				</span>
				or in any of my social accounts{' '}
			</h3>
			<div className='flex space-x-4 w-full justify-center text-white gap-6'>
				<a href='#' className='hover:scale-105 transition-all'>
					<Icon icon='cib:linkedin' height='60' />
				</a>
				<a href='#' className='hover:scale-105 transition-all'>
					<Icon icon='akar-icons:facebook-fill' height='60' />
				</a>
				<a href='#' className='hover:scale-105 transition-all'>
					<Icon icon='mdi:gmail' height='60' />
				</a>
			</div>
			<div className='block'>
				<a
					href='#'
					className=' flex w-full justify-center items-center gap-6 hover:scale-105 transition-all'
				>
					<p className='text-xl'>Scroll Up</p>
					<Icon icon='akar-icons:chevron-up' height='45' />
				</a>
			</div>
		</section>
	);
}

export default Contact;
