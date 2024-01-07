import { React, useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import { HexColorPicker } from 'react-colorful';
import { getDefaultNormalizer } from '@testing-library/react';
import styleSwatch from '../styling/swatch.module.scss';
export function SwatchGradient({ color, setColor }) {
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	function handleClick() {
		setDisplayColorPicker(!displayColorPicker);
	}

	function handleClose() {
		setDisplayColorPicker(false);
	}

	function handleChange(color) {
		setColor(color.rgb);
	}

	const styles = reactCSS({
		default: {
			color: {
				width: '40px',
				height: '30px',
				borderRadius: '3px',
				background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
			},
		},
	});

	return (
		<div>
			<div className={styleSwatch.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{displayColorPicker ? (
				<div className={styleSwatch.popover}>
					<div className={styleSwatch.cover} onClick={handleClose} />
					<SketchPicker
						className={styleSwatch.container}
						color={color}
						onChange={handleChange}
					/>
				</div>
			) : null}
		</div>
	);
}
