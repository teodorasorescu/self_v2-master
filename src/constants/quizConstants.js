export const quizData = [
	{
		question: 'Stepping into your living room, what mood do you want to feel?',
		options: [
			{
				text: 'Inspired and imaginative',
				color: 'lavender',
				preference: 'expressive',
			},
			{
				text: 'Calm, clean and ordered',
				color: 'mint',
				preference: 'minimalist',
			},
			{
				text: 'Bold, modern and striking',
				color: 'scarlet',
				preference: 'graphic',
			},
			{ text: 'Cozy and charming', color: 'peach', preference: 'illustration' },
		],
	},
	{
		question: 'Which wall art would you most likely choose?',
		options: [
			{
				text: 'Abstract expressive art',
				color: 'blush',
				preference: 'expressive',
			},
			{
				text: 'Compositions with quiet elegance',
				color: 'almond',
				preference: 'minimalist',
			},
			{
				text: 'Static objects or forms',
				color: 'crimson',
				preference: 'graphic',
			},
			{
				text: 'Hand-drawn character illustration',
				color: 'apricot',
				preference: 'illustration',
			},
		],
	},
	{
		question: 'What draws you to a piece of art?',
		options: [
			{
				text: 'Emotions and connection',
				color: 'mauve',
				preference: 'expressive',
			},

			{
				text: 'Bold visuals and curiosity',
				color: 'coral',
				preference: 'graphic',
			},
			{
				text: 'Playful scenes or characters',
				color: 'buttercup',
				preference: 'illustration',
			},
			{
				text: 'Pieces that carry the artist’s voice and style',
				color: 'terracotta',
				preference: 'artist',
			},
			{
				text: 'Balance and simplicity',
				color: 'sand',
				preference: 'minimalist',
			},
		],

		multiple: true,
	},
	{
		question: 'Which vibe best suits your space?',
		options: [
			{
				text: 'My home feels personal, like a visual diary',
				color: 'periwinkle',
				preference: 'expressive',
			},
			{
				text: 'Authentic with artist energy',
				color: 'earth',
				preference: 'artist',
			},
			{
				text: 'Bold shapes & main character energy',
				color: 'vermillion',
				preference: 'graphic',
			},
			{
				text: 'Neutral, clean and spacious',
				color: 'linen',
				preference: 'minimalist',
			},
			{
				text: 'Cozy with fun characters',
				color: 'peach',
				preference: 'illustration',
			},
		],
	},
	{
		question: 'What’s most important when you buy art?',
		options: [
			{ text: 'It needs to move me emotionally', preference: 'expressive' },
			{
				text: 'It complements my clean, ordered style',
				preference: 'minimalist',
			},
			{ text: 'It makes a statement in a room', preference: 'graphic' },
			{
				text: 'It tells a fun story or evokes nostalgia',
				preference: 'illustration',
			},
			{
				text: 'It’s made by an independent or emerging artist',
				preference: 'artist',
			},
		],
	},
];

export const resultsData = {
	colors: {
		scarlet: { description: 'Bold and energetic', hex: '#D7263D' },
		mint: { description: 'Fresh and calming', hex: '#B8E2D0' },
		lavender: { description: 'Gentle and creative', hex: '#c5a6ff' },
		peach: { description: 'Warm and playful', hex: '#FFCBA5' },
		mauve: { description: 'Dreamy and expressive', hex: '#ff7aff' },
		sand: { description: 'Soft and energetic', hex: '#ffb13b' },
		crimson: { description: 'Strong and impactful', hex: '#ff6c7c' },
		apricot: { description: 'Whimsical and cozy', hex: '#9a0c77' },
		blush: { description: 'Romantic and soft', hex: '#F4C5C5' },
		almond: { description: 'Natural and refined', hex: '#fff0c1' },
		coral: { description: 'Lively and modern', hex: '#FF715B' },
		periwinkle: { description: 'Reflective and magical', hex: '#BFC4F2' },
		linen: { description: 'Clean and airy', hex: '#F4EEE4' },
		vermillion: { description: 'Vibrant and fierce', hex: '#0d00ff' },
		buttercup: { description: 'Cheerful and sunny', hex: '#ffde00' },
		terracotta: { description: 'Handcrafted and clean', hex: '#acdcff' },
	},
	preferences: {
		expressive:
			'You’re drawn to imaginative, emotive visuals that invite reflection and feeling, often favoring art that speaks from the heart.',
		minimalist:
			'You gravitate toward calm, refined aesthetics—embracing negative space, clean lines, and quiet sophistication.',
		graphic:
			'You’re energized by bold design—dynamic color, striking forms, and contemporary compositions that demand attention.',
		illustration:
			'You find joy in narrative-rich visuals—artworks full of charm, storytelling, and hand-drawn personality.',
		artist:
			'You deeply value authenticity in art—supporting independent creators and pieces that reflect human touch and personal vision.',
	},
};
