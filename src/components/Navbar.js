import React, { useState } from 'react';
import './Navbar.scss';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = (props) => {
	const [navbar, setNavbar] = useState(false);
	const [button, setButton] = useState(true);
	const [click, setClick] = useState(false);

	const handleMenuClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

	const changeBackground = () => {
		if (window.scrollY >= 75) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeBackground);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	return (
		<nav className={navbar ? 'navbar active' : 'navbar'}>
			<div className='navbar-container'>
				<ul
					className={click ? 'nav-menu active' : 'nav-menu'}
					onClick={closeMobileMenu}>
					<li className='nav-item'>
						<Link
							smooth
							to='/#main'
							className={navbar ? 'nav-links' : 'nav-links active'}
							onClick={closeMobileMenu}>
							main
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							smooth
							to='/#about'
							className={navbar ? 'nav-links' : 'nav-links active'}
							onClick={closeMobileMenu}>
							about
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							smooth
							to='/#work'
							className={navbar ? 'nav-links' : 'nav-links active'}
							onClick={closeMobileMenu}>
							work
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							smooth
							to='/#resume'
							className={navbar ? 'nav-links' : 'nav-links active'}
							onClick={closeMobileMenu}>
							resume
						</Link>
					</li>
				</ul>
			</div>
			;
		</nav>
	);
};

export default Navbar;
