import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import styles from '../styling/dropdown.module.scss';
import { S3_BUCKET } from '../constants/links';
const Dropdown = ({ title, content, dropdownWidth, value, artistImg }) => {
	const [resumeDetails, setResumeDetails] = useState(value);
	const aboutArtistImg = S3_BUCKET + '/' + artistImg;
	const setResumeTrue = () => {
		setResumeDetails(true);
	};

	const setResumeFalse = () => {
		setResumeDetails(false);
	};

	return (
		<div>
			{resumeDetails === false && (
				<div
					className={styles.resumeContainer}
					style={{ width: dropdownWidth }}
					onClick={() => setResumeTrue()}
				>
					<div className={styles.textContainer}>
						<p>{title}</p>
						<KeyboardArrowDownIcon />
					</div>
				</div>
			)}
			{resumeDetails === true && (
				<div
					className={styles.resumeContainer}
					onClick={() => setResumeFalse()}
					style={{ width: dropdownWidth }}
				>
					<div className={styles.textContainerAfter}>
						<p>{title}</p>
						<KeyboardArrowUpIcon />
					</div>
					{artistImg !== undefined && (
						<img
							className={styles.imgContainer}
							width='350'
							src={aboutArtistImg}
							alt='about artist'
						/>
					)}
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
