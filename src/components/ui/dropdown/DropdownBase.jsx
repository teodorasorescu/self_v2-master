import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './DropdownBase.module.scss';
import './dropdownTransitions.css';

const DropdownBase = ({
	label,
	dropdownWidth,
	initialOpen = false,
	children,
}) => {
	const [open, setOpen] = useState(initialOpen);

	const toggle = () => setOpen((prev) => !prev);

	return (
		<div className={styles.container} style={{ width: dropdownWidth }}>
			{/* Clickable header */}
			<div className={styles.resumeContainer} onClick={toggle}>
				<div className={styles.textContainer}>
					<p>{label}</p>
					<SwitchTransition>
						<CSSTransition
							key={open ? 'up' : 'down'}
							timeout={300}
							classNames='icon-slide'
						>
							<span>
								{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
							</span>
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>
			{/* Slide content */}
			<CSSTransition in={open} timeout={300} classNames='slide' unmountOnExit>
				<div className={styles.resumeContainer} onClick={toggle}>
					{children}
				</div>
			</CSSTransition>
		</div>
	);
};

export default DropdownBase;
