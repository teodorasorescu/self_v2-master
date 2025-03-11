import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from '../styling/dropdown.module.scss';
import { S3_BUCKET } from '../constants/links';
import '../components/ui/dropdown/dropdownTransitions.css';

const Dropdown = ({ title, content, dropdownWidth, value, artistImg }) => {
	const [resumeDetails, setResumeDetails] = useState(value);
	const aboutArtistImg = S3_BUCKET + '/' + artistImg;

	const toggleDetails = () => {
		setResumeDetails((prev) => !prev);
	};

	return (
		<div>
			{/* Clickable header */}
			<div
				className={styles.resumeContainer}
				style={{ width: dropdownWidth }}
				onClick={toggleDetails}
			>
				<div className={styles.textContainer}>
					<p>{title}</p>
					<SwitchTransition>
						<CSSTransition
							key={resumeDetails ? 'up' : 'down'}
							timeout={300}
							classNames='icon-slide'
						>
							<span>
								{resumeDetails ? (
									<KeyboardArrowUpIcon />
								) : (
									<KeyboardArrowDownIcon />
								)}
							</span>
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>

			{/* Slide effect for content */}
			<CSSTransition
				in={resumeDetails}
				timeout={300}
				classNames='slide'
				unmountOnExit
			>
				<div
					className={styles.resumeContainer}
					style={{ width: dropdownWidth }}
				>
					{artistImg && (
						<img
							className={styles.imgContainer}
							width='350'
							src={aboutArtistImg}
							alt='about artist'
						/>
					)}
					<p>{content}</p>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Dropdown;
