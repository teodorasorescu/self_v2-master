import { React } from 'react';
import reactCSS from 'reactcss';
import styleSwatch from '../styling/swatch.module.scss';
export function Swatch({ color }) {
	const styles = reactCSS({
		default: {
			color: {
				width: '30px',
				height: '25px',
				borderRadius: '3px',
				backgroundColor: color,
			},
		},
	});

	return (
		<div>
			<div style={styles.color} />
		</div>
	);
}
