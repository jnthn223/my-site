import { useEffect, useState } from 'react';
interface IUseIntersectionObserver {
	element: HTMLElement | null;
}

const useIntersectionObserver = ({ element }: IUseIntersectionObserver) => {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setIsVisible(entries[0].isIntersecting);
			if (entries[0].isIntersecting) observer.unobserve(entries[0].target);
		});
		if (element) {
			observer.observe(element);
		}
	}, []);

	return {
		isVisible,
	};
};

export default useIntersectionObserver;
