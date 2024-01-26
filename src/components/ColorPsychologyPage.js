import classes from '../styling/color.psycho.page.module.scss';
import ColorsFlipcard from './ColorsFlipcard';
import ResearchersFlipcard from './ResearchersFlipcard';

const ColorPsychologyPage = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<h1>Psihologia culorilor</h1>
			</div>
			<div className={classes.paragraph}>
				{' '}
				<p>
					Mai mulți psihologi, cercetători și specialiști au realizat studii în
					domeniul psihologiei culorilor de-a lungul anilor. Iată câțiva exemple
					de persoane care au contribuit la acest domeniu:
				</p>
			</div>

			<div className={classes.flipcards}>
				<ResearchersFlipcard />
			</div>
			<div className={classes.rowContainer}>
				<div className={classes.colors}>
					<div className={classes.paragraph}>
						<p>
							Diferite culori pot provoca emoții și reacții specifice la oameni,
							iar acest fenomen a fost studiat în diverse domenii, inclusiv în
							psihologie, design și terapie artistică. Iată o prezentare a unor
							culori comune și efectele psihologice asociate lor:
						</p>
					</div>
					<div className={classes.colorsContainer}>
						<ColorsFlipcard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorPsychologyPage;
