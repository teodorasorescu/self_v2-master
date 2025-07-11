import { useState } from 'react';
import classes from './quiz.module.scss';
import { quizData, resultsData } from '../../../constants/quizConstants';
import Button from '../../ui/button/Button';
import Loader from '../../ui/loader/Loader'; // Assuming you have this Loader component

const QuizPage = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedPreferences, setSelectedPreferences] = useState([]);
	const [multiAnswers, setMultiAnswers] = useState([]);
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleAnswer = (option) => {
		if (quizData[currentQuestion].multiple) {
			if (multiAnswers.includes(option.preference)) {
				setMultiAnswers(
					multiAnswers.filter((pref) => pref !== option.preference)
				);
			} else {
				setMultiAnswers([...multiAnswers, option.preference]);
			}
		} else {
			if (option.color) setSelectedColors((prev) => [...prev, option.color]);
			if (option.preference)
				setSelectedPreferences((prev) => [...prev, option.preference]);
			handleNext();
		}
	};

	const handleNext = () => {
		if (quizData[currentQuestion].multiple) {
			setSelectedPreferences((prev) => [...prev, ...multiAnswers]);
			setMultiAnswers([]);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			calculateResult();
		}
	};
	const calculateResult = () => {
		setLoading(true);
		setTimeout(() => {
			const colorCounts = selectedColors.reduce((counts, color) => {
				counts[color] = (counts[color] || 0) + 1;
				return counts;
			}, {});

			const topColors = Object.keys(colorCounts)
				.sort((a, b) => colorCounts[b] - colorCounts[a])
				.slice(0, 4);

			const neutralColors = ['gray', 'white', 'black'];
			while (topColors.length < 4 && neutralColors.length > 0) {
				topColors.push(neutralColors.shift());
			}

			const preferenceCounts = selectedPreferences.reduce(
				(counts, preference) => {
					counts[preference] = (counts[preference] || 0) + 1;
					return counts;
				},
				{}
			);

			// Sort preferences by count, take top 22 (or fewer if less available)
			const topPreferences = Object.entries(preferenceCounts)
				.sort(([, a], [, b]) => b - a)
				.slice(0, 2)
				.map(([preference]) => resultsData.preferences[preference])
				.filter(Boolean);

			const mappedColors = topColors
				.map((color) => resultsData.colors[color])
				.filter(Boolean);

			setResult({
				colors: mappedColors,
				preferences: topPreferences,
			});

			setLoading(false);
		}, 1500);
	};
	const resetQuiz = () => {
		setCurrentQuestion(0);
		setSelectedColors([]);
		setSelectedPreferences([]);
		setMultiAnswers([]);
		setResult(null);
		setLoading(false);
	};

	if (loading) {
		return (
			<div
				className={classes.quizContainer}
				style={{ textAlign: 'center', paddingTop: '3rem' }}
			>
				<Loader />
				<p>We find the perfect posters only for you...</p>
			</div>
		);
	}

	return (
		<div className={classes.quizContainer}>
			{!result ? (
				<div className={classes.questionSection}>
					<h1>Art Finder Quiz</h1>
					<h2>
						Question {currentQuestion + 1} of {quizData.length}
					</h2>
					<h3>{quizData[currentQuestion].question}</h3>
					<div className={classes.options}>
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
							disabled={multiAnswers.length === 0}
							onClick={handleNext}
						>
							Next
						</button>
					)}
				</div>
			) : (
				<div className={classes.result}>
					<h2>Your Art Personality</h2>
					<h3>Colors</h3>
					<div className={classes.colorResults}>
						{result.colors.map((color, index) => (
							<div
								key={index}
								className={classes.colorCircle}
								style={{ backgroundColor: color.hex }}
								title={`${color.description} (${color.hex})`}
							>
								{color.description}{' '}
							</div>
						))}
					</div>
					<h3>Poster Preference</h3>
					<ul>
						{result.preferences.map((pref, index) => (
							<li key={index}>{pref}</li>
						))}
					</ul>{' '}
					<button onClick={resetQuiz}>Restart Quiz</button>
				</div>
			)}
		</div>
	);
};

export default QuizPage;
