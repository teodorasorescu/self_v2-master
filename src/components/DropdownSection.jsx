import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStateContext } from '../contexts/ContextProvider';
import styles from '../styling/dropdown.section.module.scss';
import FooterCategory from './FooterCategory';

const DropdownSection = ({ title, infoCategories, aboutUsCategories }) => {
	const { resume, setResume } = useStateContext();

	const setResumeTrue = () => {
		setResume(true);
	};

	const setResumeFalse = () => {
		setResume(false);
	};

	return (
		<div>
			{resume === false && (
				<div className={styles.resumeContainer} onClick={() => setResumeTrue()}>
					<div className={styles.textContainer}>
						<h5>{title}</h5>
						<KeyboardArrowDownIcon />
					</div>
				</div>
			)}
			{resume === true && (
				<div
					className={styles.resumeContainer}
					onClick={() => setResumeFalse()}
				>
					<div className={styles.textContainerAfter}>
						<h5>{title}</h5>
						<KeyboardArrowUpIcon />
					</div>
					{infoCategories != null && (
						<FooterCategory title={''} categories={infoCategories} />
					)}
					{aboutUsCategories != null && (
						<FooterCategory title={''} categories={aboutUsCategories} />
					)}
				</div>
			)}
		</div>
	);
};

export default DropdownSection;
