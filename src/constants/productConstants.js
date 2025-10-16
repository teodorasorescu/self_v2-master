export const price = 60.0;

export const shippingPrices = new Map([
	[
		'RO',
		new Map([
			['locker', { small: 17, large: 17 }],
			['courier', { small: 25, large: 28 }],
		]),
	],
	[
		'BG',
		new Map([
			['locker', { small: 5.5, large: 6 }],
			['courier', { small: 6.8, large: 7.4 }],
		]),
	],
	[
		'HU',
		new Map([
			['locker', { small: 6.5, large: 7 }],
			['courier', { small: 7.6, large: 8.4 }],
		]),
	],
]);

export const freeFraming =
	'When you purchase a canvas art print and frame in matching sizes, we will frame it for free.';
export const deliveryDetails =
	'Delivery is made by Sameday and it takes up to 3-5 days. You can choose between home or easybox locker delivery.';
export const details =
	'Print: Hahnemühle Canvas 320 g/m² with a matte finish\n\nFrames\nFrame Material: 100% FSC® certified natural wood\nMounting Method: Equipped with a hanger\nPicture Protection: Plexiglass\n\nStretcher (Chassis):\nMaterial: Dried softwood';
export const stickerDetails = 'Size: 15x20cm\nSticker Sheet';

export const postersDetails =
	'Print: Hahnemühle Canvas 320 g/m² with a matte finish\n\nFrames\nFrame Material: 100% FSC® certified natural wood\nMounting Method: Equipped with a hanger\nPicture Protection: Plexiglass\n\nStretcher (Chassis):\nMaterial: Dried softwood';

export const framesDetails =
	'Print: Hahnemühle Canvas 320 g/m² with a matte finish\n\nFrames\nFrame Material: 100% FSC® certified natural wood\nMounting Method: Equipped with a hanger\nPicture Protection: Plexiglass\n\nStretcher (Chassis):\nMaterial: Dried softwood';

export const suport =
	"For questions, don't hesitate to contact us at hello@self-posters.com, or on Instagram/TikTok @self_posters ♡";
export const atentionareCuloare =
	'Vă sfătuim să nu alegeți culori stridente. Tehnologia actuală nu permite printarea culorilor în format RGB, ci CMYK. Astfel, culorile stridente pot ieși la imprimare ușor mai închise.';

export const daia_description =
	'Daia currently living and working in Bucharest as a visual artist and as a graphic designer. Her artworks are characterized by vibrant, bold colors — with a soft spot for the depth of purple — all merging together with organic lines and shapes. She draws inspiration mostly from nature and from little day-to-day thoughts and happenings.';
export const shippingMessage = 'Transport gratuit la comenzi peste 240 RON!';

export const headerMessage = 'La 3 tablouri cumpărate, al 3 lea este gratuit';

export const color0 = {
	r: '255',
	g: '190',
	b: '11',
};

export const color2 = {
	r: '251',
	g: '86',
	b: '7',
};

export const color3 = {
	r: '255',
	g: '0',
	b: '110',
};

export const color1 = {
	r: '255',
	g: '163',
	b: '163',
};

export const fontColors = ['1st Color', '2nd Color', '3rd Color', '4th Color'];
export const subheadersLabelData = ['Featured'];

export const summerProducts = [
	'Definitely a Pisces',
	'Sip, Glow, Repeat',
	'Când nu mai poți...mai poți un pic...',
	'Mai mult decât îmi trebuie, mai puțin decât vreau.',
	'Le Joyeux Trench-Coat',
	'Le cardigan gourmand',
	'Bucharest',
	'Girls night at my place ||',
	'Girls night at my place |',
];

export const selectedShowcaseProducts = [
	'Mes Tabi',
	'Milan',
	'Bucharest',
	'OOTD',
	'Martini Nights',
	'Girls night at my place ||',
	'Girls night at my place |',
];
export const subheadersData = new Map([
	[
		'Featured',
		[
			{
				label: 'Autumn Collection',
				href: '/journal/autumn-collection',
			},
			{
				label: 'La Siesta Collection',
				href: '/journal/ana-liana',
			},
			{
				label: 'Still Life, Still Home Collection',
				href: '/journal/ciocarlica',
			},
			{
				label: 'The Spring Blossom Collection',
				href: '/journal/silvie-illustrations',
			},
			{
				label: 'Salt Water Collection',
				href: '/journal/daia-grigore',
			},
		],
	],
]);

export const headersData = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Canvas Art Prints',
		href: '/canvas-art-prints',
	},
	{
		label: 'Manifestation Event',
		href: '/event',
	},
	{
		label: 'Journal',
		href: '/journal',
	},
];

export const prices = new Map([
	['21x30cm', 60],
	['30x40cm', 90],
]);

export const sizes = ['13x18cm', '21x30cm', '30x40cm', '50x70cm'];
export const chassisPrices = new Map([
	['21x30cm', 30],
	['30x40cm', 50],
	['50x70cm', 80],
]);

export const framePrices = new Map([
	['21x30cm', 35],
	['30x40cm', 55],
]);

export const posterPrices = new Map([
	[
		'13x18cm',
		new Map([
			[60, 40],
			[62, 62],
		]),
	],
	[
		'21x30cm',
		new Map([
			[60, 60],
			[62, 159],
		]),
	],
	[
		'30x40cm',
		new Map([
			[60, 90],
			[62, 229],
		]),
	],
	[
		'50x70cm',
		new Map([
			[60, 150],
			[62, 409],
		]),
	],
]);

export const contactData = [
	{
		label: 'Artsy Club',
		href: '/artsy-club',
	},
	{
		label: 'About Us',
		href: '/about-us',
	},
	{
		label: 'FAQ',
		href: '/faq',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];
