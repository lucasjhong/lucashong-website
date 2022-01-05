import React from 'react';

import './Layout.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = (props) => {
	return (
		<>
			<Navbar />
			<main>{props.children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
