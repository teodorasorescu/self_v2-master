import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from '../styling/dropdown.module.scss';
import { useState } from 'react';

const Dropdown = ({ title, content }) => {
	const [resumeDetails, setResumeDetails] = useState(false);

	const setResumeTrue = () => {
		setResumeDetails(true);
	};

	const setResumeFalse = () => {
		setResumeDetails(false);
	};

	return (
		<div>
			{resumeDetails === false && (
				<div className={styles.resumeContainer} onClick={() => setResumeTrue()}>
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
				>
					<div className={styles.textContainerAfter}>
						<p>{title}</p>
						<KeyboardArrowUpIcon />
					</div>
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
