import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import styles from '../styling/dropdown.module.scss';
const Dropdown = ({ title, content, dropdownWidth }) => {
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
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
