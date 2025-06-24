import React, { useState } from 'react';
import classes from './quiz.module.scss';

const quizData = [
	{
		question: 'What describes your personality best?',
		options: [
			{ text: 'Bold and passionate', color: 'red' },
			{ text: 'Calm and collected', color: 'blue' },
			{ text: 'Creative and imaginative', color: 'purple' },
			{ text: 'Grounded and balanced', color: 'green' },
		],
	},
	{
		question: 'What style of art inspires you the most?',
		options: [
			{ text: 'Abstract and expressive', preference: 'abstract' },
			{ text: 'Surreal and dreamlike', preference: 'surreal' },
			{ text: 'Minimalist and clean', preference: 'minimalist' },
			{ text: 'Bold and graphic designs', preference: 'graphic' },
		],
	},
	{
		question: 'Which colors would dominate your ideal art piece?',
		options: [
			{
				text: 'Bright and cheerful tones',
				color: 'yellow',
				preference: 'abstract',
			},
			{
				text: 'Earthy and natural shades',
				color: 'brown',
				preference: 'minimalist',
			},
			{ text: 'Elegant and modern hues', color: 'teal', preference: 'graphic' },
			{
				text: 'Dark and dramatic tones',
				color: 'black',
				preference: 'surreal',
			},
			{
				text: 'Soft pink and pastel hues',
				color: 'pink',
				preference: 'dreamy',
			},
		],
	},
	{
		question: 'What motivates you to purchase art?',
		options: [
			{ text: 'Supporting independent artists', preference: 'independent' },
			{ text: 'Making a bold statement in a room', preference: 'graphic' },
			{
				text: 'It has to represent my style or personality',
				preference: 'personal',
			},
			{
				text: 'Decorating with harmonious aesthetics',
				preference: 'decorative',
			},
			{
				text: 'I need an emotional attachment to the art',
				preference: 'personal',
			},
		],
		multiple: true,
	},
	{
		question: 'Which best describes your relationship with art?',
		options: [
			{
				text: 'Art is life! I keep up-to-date with artists I love',
				preference: 'independent',
			},
			{
				text: 'I appreciate art, but I don’t keep up to date',
				preference: 'minimalist',
			},
			{
				text: 'I’m new to the art world, but I want to learn',
				preference: 'graphic',
			},
		],
	},
	{
		question: 'What kind of posters appeal to you most?',
		options: [
			{ text: 'Abstract, colorful splashes', preference: 'abstract' },
			{ text: 'Surreal landscapes', preference: 'surreal' },
			{ text: 'Minimalist typography', preference: 'minimalist' },
			{ text: 'Bold graphic illustrations', preference: 'graphic' },
			{ text: 'Dreamy pastel illustrations', preference: 'dreamy' },
		],
	},
	{
		question: 'Which vibe resonates with you most?',
		options: [
			{ text: 'Soft and whimsical', color: 'pink', preference: 'dreamy' },
			{
				text: 'Elegant and luxurious',
				color: 'gold',
				preference: 'decorative',
			},
			{ text: 'Bright and fun', color: 'yellow', preference: 'playful' },
			{ text: 'Chic and modern', color: 'teal', preference: 'graphic' },
		],
	},
	{
		question: 'Which art themes do you find most charming?',
		options: [
			{
				text: 'Floral and botanical designs',
				color: 'pink',
				preference: 'dreamy',
			},
			{
				text: 'Cute and playful illustrations',
				color: 'pink',
				preference: 'playful',
			},
			{ text: 'Classic vintage styles', color: 'peach', preference: 'vintage' },
			{
				text: 'Fantasy and magical themes',
				color: 'lavender',
				preference: 'fantasy',
			},
		],
	},
	{
		question: 'What do you think makes a space feel complete?',
		options: [
			{
				text: 'Soft, pastel tones for a calming effect',
				color: 'pink',
				preference: 'dreamy',
			},
			{
				text: 'Bold, striking pieces for impact',
				color: 'red',
				preference: 'graphic',
			},
			{
				text: 'Clean, minimalist designs',
				color: 'white',
				preference: 'minimalist',
			},
			{
				text: 'Cozy, warm tones for comfort',
				color: 'peach',
				preference: 'cozy',
			},
		],
	},
];

const resultsData = {
	colors: {
		red: { description: 'Bold and energetic', hex: '#FF4C4C' },
		blue: { description: 'Calm and soothing', hex: '#4C6EFF' },
		purple: { description: 'Creative and imaginative', hex: '#9C27B0' },
		green: { description: 'Grounded and balanced', hex: '#4CAF50' },
		pink: { description: 'Playful and vibrant', hex: '#FFC0CB' },
		black: { description: 'Dark and dramatic', hex: '#000000' },
		white: { description: 'Pure and simple', hex: '#FFFFFF' },
		brown: { description: 'Earthy and natural', hex: '#8B4513' },
		orange: { description: 'Energetic and warm', hex: '#FF9800' },
		yellow: { description: 'Bright and cheerful', hex: '#FFD700' },
		teal: { description: 'Elegant and modern', hex: '#008080' },
		gray: { description: 'Neutral and sophisticated', hex: '#808080' },
	},
	preferences: {
		abstract: 'Abstract art suits your love for expression and creativity.',
		surreal: 'Surreal art matches your imaginative and dreamy side.',
		minimalist: 'Minimalist designs reflect your appreciation for simplicity.',
		graphic: 'You enjoy bold and striking graphic designs.',
		independent: 'You value supporting independent artists.',
		decorative: 'You aim to create a harmonious and beautiful environment.',
		personal: 'You choose art that resonates deeply with you.',
	},
};

const QuizPage = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedPreferences, setSelectedPreferences] = useState([]);
	const [multiAnswers, setMultiAnswers] = useState([]);
	const [result, setResult] = useState(null);

	const handleAnswer = (option) => {
		// For multiple-choice question
		if (quizData[currentQuestion].multiple) {
			if (multiAnswers.includes(option.preference)) {
				setMultiAnswers(
					multiAnswers.filter((pref) => pref !== option.preference)
				);
			} else {
				setMultiAnswers([...multiAnswers, option.preference]);
			}
		} else {
			// For single-choice questions
			if (option.color) setSelectedColors((prev) => [...prev, option.color]);
			if (option.preference)
				setSelectedPreferences((prev) => [...prev, option.preference]);
			handleNext();
		}
	};

	const handleNext = () => {
		// For multiple-choice question, save answers and proceed
		if (quizData[currentQuestion].multiple) {
			setSelectedPreferences((prev) => [...prev, ...multiAnswers]);
			setMultiAnswers([]); // Reset multiAnswers for the next question
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			calculateResult();
		}
	};

	const calculateResult = () => {
		// Tally colors
		const colorCounts = selectedColors.reduce((counts, color) => {
			counts[color] = (counts[color] || 0) + 1;
			return counts;
		}, {});

		// Sort colors by frequency and get the top four
		const topColors = Object.keys(colorCounts)
			.sort((a, b) => colorCounts[b] - colorCounts[a])
			.slice(0, 4);

		// Ensure exactly 4 colors (add neutral colors if fewer than 4)
		const neutralColors = ['gray', 'white', 'black'];
		while (topColors.length < 4) {
			topColors.push(neutralColors.pop());
		}

		// Tally preferences
		const preferenceCounts = selectedPreferences.reduce(
			(counts, preference) => {
				counts[preference] = (counts[preference] || 0) + 1;
				return counts;
			},
			{}
		);

		const topPreference = Object.keys(preferenceCounts).sort(
			(a, b) => preferenceCounts[b] - preferenceCounts[a]
		)[0];

		setResult({
			colors: topColors.map((color) => resultsData.colors[color]),
			preference: resultsData.preferences[topPreference],
		});
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setSelectedColors([]);
		setSelectedPreferences([]);
		setMultiAnswers([]);
		setResult(null);
	};

	return (
		<div className='quiz-container'>
			{!result ? (
				<div className='question-section'>
					<h2>
						Question {currentQuestion + 1} of {quizData.length}
					</h2>
					<h3>{quizData[currentQuestion].question}</h3>
					<div className='options'>
						{quizData[currentQuestion].options.map((option, index) => (
							<button
								key={index}
								className={
									quizData[currentQuestion].multiple &&
									multiAnswers.includes(option.preference)
										? classes.selectedOption
										: ''
								}
								onClick={() => handleAnswer(option)}
							>
								{option.text}
							</button>
						))}
					</div>
					{quizData[currentQuestion].multiple && (
						<button
							className={classes.nextButton}
							disabled={multiAnswers.length === 0} // Require at least one selection
							onClick={handleNext}
						>
							Next
						</button>
					)}
				</div>
			) : (
				<div className='result'>
					<h2>Your Art Personality</h2>
					<h3>Colors:</h3>
					<div className='color-results'>
						{result.colors.map((color, index) => (
							<div
								key={index}
								style={{
									backgroundColor: color.hex,
									padding: '10px',
									color: '#fff',
									margin: '10px',
								}}
							>
								{color.description} ({color.hex})
							</div>
						))}
					</div>
					<h3>Poster Preference:</h3>
					<p>{result.preference}</p>
					<button onClick={resetQuiz}>Restart Quiz</button>
				</div>
			)}
		</div>
	);
};

export default QuizPage;
