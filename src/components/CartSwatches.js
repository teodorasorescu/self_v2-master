import React from 'react';

export const CartSwatches = ({ colors }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				padding: '5%',
			}}
		>
			{colors.map((color, i) => {
				<div
					key={i}
					style={{
						width: '40px',
						height: '30px',
						borderRadius: '3px',
						backgroundColor: 'black',
					}}
				>
					<p>Hello</p>
				</div>;
			})}
		</div>
	);
};
