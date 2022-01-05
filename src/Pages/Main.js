import React from 'react';

import './Main.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Resume from '../components/Resume';

import profilePicture from '../img/profile.png';
import abellaPreview from '../img/abella-preview.gif';
import budgettixPreview from '../img/budgettix-preview.gif';
import volumeadaptPreview from '../img/volume-adapt-preview-small.gif';

const Main = () => {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className='main-page'>
			<div className='hero' id='main'>
				<h1>
					Hello, {'\n'}I'm Lucas. I'm an architecture designer turned developer.
				</h1>
				<h3>
					Based in Toronto, I am currently focused on making quality frontend
					products.
				</h3>
			</div>

			<div className='about' id='about'>
				<h1 className='title'>About</h1>
				<img alt='' src={profilePicture} />

				<h4>
					I'm a former architecture designer and a self-taught developer. What
					used to be a hobby became my passion, while incorporating design
					ideologies that I have culminated over the years, to develop products
					that focuses on both aspects of design and functionality.
				</h4>
				<h4>
					Here are some technologies that I've been working with recently:
				</h4>
				<div className='technologies-list'>
					<ul>
						<li>
							<img
								src='https://img.icons8.com/color/480/000000/react-native.png'
								alt=''
							/>
							React
						</li>
						<li>
							<img
								src='https://img.icons8.com/fluency/240/000000/node-js.png'
								alt=''
							/>
							Node.js
						</li>
						<li>
							<img
								src='https://img.icons8.com/color/480/000000/firebase.png'
								alt=''
							/>
							Firebase
						</li>
						<li>
							<img
								src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png'
								alt=''
							/>
							Mongo DB
						</li>
						<li>
							<img
								src='https://img.icons8.com/ios-filled/500/000000/unity.png'
								alt=''
							/>
							Unity (C#)
						</li>
						<li>
							<img
								src='https://img.icons8.com/color/480/000000/android-studio--v2.png'
								alt=''
							/>
							Android Studio
						</li>
					</ul>
				</div>
			</div>

			<div className='work' id='work'>
				<h1>Projects</h1>
				<div className='work-content'>
					<div className='content-text'>
						<h1>Abella</h1>
						<p
							onClick={() => openInNewTab('https://abellabakery.ca')}
							className='demo-link'>
							abellabakery.ca
						</p>
						<p>
							Single page e-commerce application built with React, paired with a
							database that receives and returns information of different
							products, user favourites, reviews, and orders via REST API built
							fromm Node.js and Express.js.
						</p>

						<GitHubIcon
							className='icon'
							onClick={() =>
								openInNewTab('https://github.com/lucasjhong/abella-bakery')
							}
						/>

						<p className='technologies'>
							React / Redux / Express / Firebase / NodeJS / InstagramAPI
						</p>
					</div>
					<div className='content-image'>
						<img alt='' src={abellaPreview} />
					</div>
				</div>
				<div className='work-content'>
					<div className='content-text' style={{}}>
						<h1>Budget Tix</h1>
						<p
							onClick={() => openInNewTab('https://budgettix.netlify.app')}
							className='demo-link'>
							budgettix.netlify.app
						</p>
						<p className='content-description'>
							React application built as an improvement to the existing ticket
							trading platforms such as SeatGeet and Ticketmaster. Implemented a
							better serach/filter structure and UI improvement to display range
							of ticket prices for events in a more transparent and effortless
							manner.
						</p>
						<GitHubIcon
							className='icon'
							onClick={() =>
								openInNewTab('https://github.com/lucasjhong/budget-tix')
							}
						/>

						<p className='technologies'>
							React / PlacesAPI / MaterialUI / SeatGeekAPI
						</p>
					</div>
					<div className='content-image'>
						<img alt='' src={budgettixPreview} />
					</div>
				</div>

				<div className='work-content'>
					<div className='content-text'>
						<h1>Volume Adapt</h1>
						<p
							onClick={() =>
								openInNewTab(
									'https://chrome.google.com/webstore/detail/volume-adapt/dicnjoljhecfbjjndjeiepcdefelncmj'
								)
							}
							className='demo-link'>
							Chrome Web Store
						</p>
						<p>
							Chrome extension that allows the user to adjust the voume of
							different tabs individually, as well as navigate through different
							tabs playing audio. Users are able to contribute to crowd-sourcing
							an optimal volume for videos, by submitting their volume to the
							database, which is then used to suggest an appropriate volume for
							videos upon opening a new one.
						</p>
						<GitHubIcon
							className='icon'
							onClick={() =>
								openInNewTab('https://github.com/lucasjhong/volume-adapt')
							}
						/>
						<p className='technologies'>
							React / Firestore / MaterialUI / ChromeAPI / NodeJS
						</p>
					</div>
					<div className='content-image'>
						<img alt='' src={volumeadaptPreview} />
					</div>
				</div>

				<div className='work-arch'>
					<h3>Other Works</h3>
					<p>
						You can check out my Architecture projects, if you're into that
						stuff.
					</p>
					<p
						className='button'
						onClick={() =>
							openInNewTab('https://issuu.com/lucashong/docs/lucas_hong_2017')
						}>
						Architecture Portfolio
					</p>
				</div>
			</div>

			<Resume id='resume' />

			<div className='contacts-sidebar'>
				<EmailIcon
					className='sidebar-item'
					onClick={() => openInNewTab('mailto:lucasjhong@gmail.com')}
				/>
				<GitHubIcon
					className='sidebar-item'
					onClick={() => openInNewTab('https://github.com/lucasjhong')}
				/>
				<LinkedInIcon
					className='sidebar-item'
					onClick={() =>
						openInNewTab('https://www.linkedin.com/in/lucasjhong/')
					}
				/>
			</div>

			<div className='page-end'>
				<h3>
					I am currently looking for new opportunities as a developer!{'\n'}
					If you want to get in touch with me, feel free to contact me at:
				</h3>

				<a
					className='button'
					href={'mailto:lucasjhong@gmail.com'}
					rel='noopener noreferrer'
					target='_blank'>
					lucasjhong@gmail.com
				</a>
			</div>
		</div>
	);
};

export default Main;
