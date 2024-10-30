import React from 'react';
import { Helmet } from 'react-helmet';

function Breadcrumbs() {
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://selfposters.ro/',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Canvas Art Prints',
				item: 'https://selfposters.ro/canvas-art-prints',
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: 'Custom Body Mind Soul Canvas',
				item: 'https://selfposters.ro/custom-canvas',
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: 'Inspiration',
				item: 'https://selfposters.ro/inspiratie',
			},
		],
	};

	return (
		<Helmet>
			<script type='application/ld+json'>
				{JSON.stringify(breadcrumbSchema)}
			</script>
		</Helmet>
	);
}

export default Breadcrumbs;
