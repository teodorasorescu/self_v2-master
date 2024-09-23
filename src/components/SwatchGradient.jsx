import { React, useState } from 'react';
import reactCSS from 'reactcss';
import styleSwatch from '../styling/swatch.module.scss';
import { RgbColorPicker } from 'react-colorful';

export function SwatchGradient({ color, setColor }) {
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	function handleClick() {
		setDisplayColorPicker(!displayColorPicker);
	}

	function handleClose() {
		setDisplayColorPicker(false);
	}

	const styles = reactCSS({
		default: {
			color: {
				width: '40px',
				height: '30px',
				borderRadius: '3px',
				background: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`,
			},
		},
	});

	const customStyles = {
		default: {
			picker: {
				//width: '250px',
			},
		},
	};

	return (
		<div>
			<div className={styleSwatch.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{displayColorPicker ? (
				<div className={styleSwatch.popover}>
					<div className={styleSwatch.cover} onClick={handleClose} />
					<RgbColorPicker
						className={styleSwatch.container}
						color={color}
						onChange={setColor}
						styles={customStyles} // Apply custom styles here
					/>
				</div>
			) : null}
		</div>
	);
}
