import { useState } from 'react';
import classes from './quiz.module.scss';
import { quizData, resultsData } from '../../../constants/quizConstants';
import Loader from '../../ui/loader/Loader';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';

const QuizPage = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedPreferences, setSelectedPreferences] = useState([]);
	const [multiAnswers, setMultiAnswers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null); // start null

	const { setQuizResult } = useStateContext();

	const getTopTwoPreferences = (prefs) => {
		// 1. Count frequencies
		const frequencyMap = {};
		prefs.forEach((pref) => {
			frequencyMap[pref] = (frequencyMap[pref] || 0) + 1;
		});

		// 2. Convert to array and sort by frequency (descending), then alphabetically (ascending)
		const sorted = Object.keys(frequencyMap).sort((a, b) => {
			return frequencyMap[b] - frequencyMap[a] || a.localeCompare(b);
		});

		// 3. Slice the top 2
		return sorted.slice(0, 2);
	};

	const handleAnswer = (option) => {
		if (quizData[currentQuestion].multiple) {
			setMultiAnswers((prev) =>
				prev.includes(option.preference)
					? prev.filter((p) => p !== option.preference)
					: [...prev, option.preference]
			);
		} else {
			if (option.color) setSelectedColors((prev) => [...prev, option.color]);
			if (option.preference)
				setSelectedPreferences((prev) => [...prev, option.preference]);
			handleNext();
		}
	};

	const navigate = useNavigate();
	const handleNext = () => {
		if (quizData[currentQuestion].multiple) {
			setSelectedPreferences((prev) => [...prev, ...multiAnswers]);
			setMultiAnswers([]);
		}
		currentQuestion + 1 < quizData.length
			? setCurrentQuestion((q) => q + 1)
			: calculateResult();
	};

	const calculateResult = () => {
		setLoading(true);

		setTimeout(() => {
			const counts = selectedColors.reduce(
				(m, c) => ((m[c] = (m[c] || 0) + 1), m),
				{}
			);

			let topColors = Object.keys(counts)
				.sort((a, b) => counts[b] - counts[a])
				.filter((c) => c !== 'black' && c !== 'white')
				.slice(0, 4);

			const fallback = ['peach', 'mint', 'lavender', 'scarlet', 'teal', 'gray'];
			for (const color of fallback) {
				if (topColors.length === 4) break;
				if (!topColors.includes(color)) topColors.push(color);
			}

			const mappedColors = topColors
				.map((c) => resultsData.colors[c])
				.filter(Boolean);

			const payload = {
				colors: mappedColors,
				preferences: getTopTwoPreferences(selectedPreferences),
			};

			setQuizResult(payload);
			setResult(payload);
			setLoading(false);
			navigate('/quiz-result');
		}, 5000);
	};

	return (
		<div className={classes.quizContainer}>
			{loading && (
				<div style={{ textAlign: 'center', paddingTop: '3rem' }}>
					<Loader />
					<p>We search the perfect posters for you...</p>
				</div>
			)}

			{!loading && !result && (
				<div className={classes.questionSection}>
					<h1>Art Finder Quiz</h1>
					<h2>
						Question {currentQuestion + 1} of {quizData.length}
					</h2>
					<h3>{quizData[currentQuestion].question}</h3>

					<div className={classes.options}>
						{quizData[currentQuestion].options.map((option, idx) => (
							<button
								key={idx}
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
						<Button
							className={classes.nextButton}
							msg={'Next'}
							disabled={multiAnswers.length === 0}
							onClick={handleNext}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default QuizPage;
