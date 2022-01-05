import React from 'react';

import {
	TimelineOppositeContent,
	TimelineDot,
	TimelineContent,
	TimelineConnector,
	TimelineSeparator,
	TimelineItem,
	Timeline,
} from '@mui/lab';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import './Resume.scss';
import resume from '../resume.pdf';

const Resume = () => {
	const progressProps = {
		theme: {
			default: {
				// color: 'linear-gradient(#95d1cc, #00adb5)',
				color: '#00adb5',
			},
		},

		status: 'default',
	};
	return (
		<div className='resume' id='resume'>
			<h1>Resume</h1>
			<div className='resume-content'>
				<div className='resume-left'>
					<h3>Education</h3>

					<Timeline position='right'>
						<TimelineItem>
							<TimelineOppositeContent align='left'>
								2019-Present
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot variant='outlined' />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ flex: 4 }}>
								Self Learning
								<p>
									Audited various CS courses as well as learning different types
									of technologies, creating projects
								</p>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent align='left'>
								2011-2016
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot variant='outlined' />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ flex: 4 }}>
								Carleton University
								<p>Bachelor of Architectural Studies</p>
							</TimelineContent>
						</TimelineItem>
					</Timeline>

					<h3>Work</h3>
					<Timeline position='right'>
						<TimelineItem>
							<TimelineOppositeContent align='left'>
								2017-2019
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot variant='outlined' />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ flex: 4 }}>
								Quadrangle Architects<p>Toronto, Canada</p>
								<p>
									Involved in multiple residential projects located in the
									Greater Toronto Area, ranging from high-rise to mid-rise in
									different phases from preliminary concepts to building permit
									and working drawings, with extensive use of Revit. While being
									in charge of the central models, coordinated projects
									implementing frequent changes necessary to meet different
									requirements such as consultant's proposals, client's
									suggestions and revisions, in a fast-paced environment.
								</p>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent align='left'>
								2015-2016
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot variant='outlined' />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ flex: 4 }}>
								Bjarke Ingels Group
								<p>New York, USA</p>
								<p>
									Worked on various projects located throughout the United
									States, while being responsible for design phase exercises and
									presentations such as massing studies, research, 3d modeling
									and rendering for projects in different phases. Took roles in
									projects such as: New York Penn Station Revitalization, FC
									Barcelona Camp Nou Competition, 7 World Trade Center (Ground
									Floor), UMass Isenberg School of Management.
								</p>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>

				<div className='resume-right'>
					<h3>Coding</h3>
					<p>Javascript</p>
					<Progress percent={90} {...progressProps} />
					<p>HTML / CSS</p>
					<Progress percent={90} {...progressProps} />
					<p>Java</p>
					<Progress percent={70} {...progressProps} />
					<p>Python</p>
					<Progress percent={70} {...progressProps} />
					<h3>Design</h3>
					<p>Web</p>
					<Progress percent={80} {...progressProps} />
					<p>Graphics</p>
					<Progress percent={90} {...progressProps} />
				</div>
			</div>
			<a
				className='button'
				href={resume}
				rel='noopener noreferrer'
				target='_blank'>
				View Full Resume
			</a>
		</div>
	);
};

export default Resume;
