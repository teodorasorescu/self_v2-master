import classes from '../styling/faq.dropdown.module.scss';
import Dropdown from './Dropdown';
import useMediaQuery from '@mui/material/useMediaQuery';

const FAQDropdown = ({ questions }) => {
	const width = useMediaQuery('(max-width:1024px)') ? '90vw' : '50vw';
	return (
		<div className={classes.dropdownContainer}>
			{questions.map((q, i) => {
				return (
					<div className={classes.dropdown} key={i}>
						<Dropdown
							title={q.title}
							content={q.content}
							dropdownWidth={width}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default FAQDropdown;
