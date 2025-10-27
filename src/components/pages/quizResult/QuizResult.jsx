import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../../contexts/ContextProvider';
import getQuizResult from '../../../reducers/actions/getQuizResult';
import PostersList from '../../features/postersList/PostersList';
import NewsletterForm from '../../NewsletterForm';
import classes from './quiz.result.module.scss';
import { resultsData } from '../../../constants/quizConstants';
import Button from '../../ui/button/Button';

const QuizResult = () => {
	const { quizResult, setQuizResult } = useStateContext();
	const [signedUp, setSignedUp] = useState(false); // ← gate flag
	const navigate = useNavigate();
	const { colors, preferences } = quizResult;

	const prefObject = resultsData.preferences;

	useEffect(() => {
		if (preferences?.length) {
			getQuizResult(preferences);
		}
	}, [preferences]);

	const postersResult = JSON.parse(localStorage.getItem('QUIZ_RESULT') || '[]');

	if (!signedUp) {
		return (
			<div className={classes.quizContainer}>
				<h1>
					We got you! <br /> Your quiz result is ready <br />
					Sign up to see it immediatly
				</h1>
				<NewsletterForm onSuccess={() => setSignedUp(true)} />
			</div>
		);
	}

	return (
		<div className={classes.quizContainer}>
			<div className={classes.result}>
				<h2>Your Quiz Result</h2>
				<div className={classes.preferencesSection}>
					<h3>The Posters You NEED</h3>

					<div className={classes.preferencesList}>
						{preferences.map((p, i) => (
							<div key={i} className={classes.preferenceItem}>
								{prefObject[p]}
							</div>
						))}
					</div>

					{postersResult.length > 0 && (
						<div className={classes.postersWrapper}>
							<PostersList posters={postersResult} />
						</div>
					)}

					<div className={classes.buttonContainer}>
						<Button
							className={classes.restartButton}
							msg={'Restart Quiz'}
							onClick={() => navigate('/quiz')}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizResult;
