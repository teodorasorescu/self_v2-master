import colorResearchers from '../constants/colorResearchers';
import colors from '../constants/colorsDescription';
import classes from '../styling/color.psycho.page.module.scss';

const ColorPsychologyPage = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>
				{' '}
				<h1>Psihologia culorilor</h1>
			</div>
			<div className={classes.rowContainer}>
				<div className={classes.researchers}>
					<p>
						Mai mulți psihologi, cercetători și specialiști au realizat studii
						în domeniul psihologiei culorilor de-a lungul anilor. Iată câțiva
						exemple de persoane care au contribuit la acest domeniu:
					</p>

					{colorResearchers.map((c, i) => {
						return (
							<div className={classes.desc} key={i}>
								<h4>{c.researcher}</h4>
								<p>{c.desc}</p>
							</div>
						);
					})}
				</div>
				<div className={classes.colors}>
					<p>
						Diferite culori pot provoca emoții și reacții specifice la oameni,
						iar acest fenomen a fost studiat în diverse domenii, inclusiv în
						psihologie, design și terapie artistică. Iată o prezentare a unor
						culori comune și efectele psihologice asociate lor:
					</p>
					{colors.map((c, i) => {
						return (
							<div className={classes.desc} key={i}>
								<h4 style={{ color: c.color }}>{c.title}</h4>
								<p>{c.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ColorPsychologyPage;
