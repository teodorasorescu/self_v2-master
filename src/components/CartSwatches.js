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
			{colors.map((color) => {
				<div
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
