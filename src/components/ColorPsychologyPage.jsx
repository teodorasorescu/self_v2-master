import React from 'react';

import classes from '../styling/color.psycho.page.module.scss';
import ColorsFlipcard from './ColorsFlipcard';
import ResearchersFlipcard from './ResearchersFlipcard';
const ColorPsychologyPage = () => {
	return (
		<>
			<div className={classes.container}>
				<div className={classes.title}>
					<h1>Psihologia culorilor</h1>
					<h2>
						"The more we can love colour, the more that we can express who we
						truly are.”
					</h2>
					<h2 className={classes.author}>Karen Haller</h2>
				</div>
				<div className={classes.description}>
					<h3>Ce este psihologia culorilor?</h3>
					<p>
						Psihologia culorilor studiază modul în care diferite culori
						afectează starea de spirit și comportamentul uman, precum și modul
						în care percepția culorilor este afectată de factori precum vârsta
						și contextul cultural. Există diverse modalități prin care culorile
						pot fi folosite pentru a crea diferite stări și emoții. De exemplu,
						culorile calde precum roșu, portocaliu și galben sunt adesea
						asociate cu energie, căldură și entuziasm. Pe de altă parte,
						culorile reci, cum ar fi albastru, verde și mov, sunt frecvent
						legate de calm, relaxare și liniște. Culorile aprinse pot să
						provoace un sentiment de entuziasm, în timp ce culorile estompate
						pot transmite o senzație de serenitate.
					</p>
					<p>
						{' '}
						În plus, anumite culori pot evoca asocieri culturale sau personale,
						cum ar fi utilizarea roșului în cultura chineză pentru a simboliza
						norocul și prosperitatea. Prin înțelegerea acestor diferite asocieri
						și a modurilor în care acestea pot varia în funcție de context,
						artiștii și designerii pot folosi eficient culorile pentru a crea
						lucrări care să transmită o anumită stare sau un mesaj.
					</p>
					<p>
						{' '}
						Istoria psihologiei culorilor datează din perioada Greciei Antice,
						în care se credea că culorile aveau un impact direct asupra
						sănătății și bunăstării unei persoane. Cu toate acestea, abia în
						secolul al XVIII-lea poetul german Johann Wolfgang von Goethe a
						început să studieze efectele psihologice ale culorilor, ceea ce a
						influențat ulterior lucrările altor teoreticieni notabili.
					</p>

					<h3>Cine a studiat psihologia culorilor?</h3>
				</div>
				<div className={classes.flipcards}>
					<ResearchersFlipcard />
				</div>

				<div className={classes.rowContainer}>
					<div className={classes.colors}>
						<div className={classes.description}>
							<h3>Care este legătura dintre spiritualitate și culori?</h3>
							<div className={classes.title}>
								<h2>"Color is not what it is, color is what it gives away"</h2>
								<h2 className={classes.author}>Sadhguru</h2>
							</div>
							<p>
								Cum evidențiază și Sadhguru, contează ceea ce transmiți, nu ceea
								ce vezi. Dacă emani iubire, oamenii te vor vedea ca pe o
								persoană iubitoare, însă dacă păstrezi toată iubirea pentru
								tine, ceilalți nu te vor percepe în același fel. Aceasta este
								natura existenței în sine. Oamenii observă doar ceea ce alegi să
								le dăruiești, iar acest lucru este calitatea ta, nu ceea ce
								rezervi pentru tine. Cum este culoarea semnificativă pentru
								conștiința umană sau pentru orice fel de proces spiritual? Este
								semnificativă, deoarece culoarea pe care o reflectezi se va
								adăuga, în mod natural, aurei pe care o porți. Orice materie
								fizică reflectă lumină. Odată ce reflectă lumină, această
								materie va avea o culoare în percepția ta. Astfel, în funcție de
								nivelul la care ești în procesul tău de creștere spirituală, vei
								transmite anumite culori prin aura ta.
							</p>
							<p>Explorează lumea culorilor, întorcând pe rând cardurile.</p>
						</div>
						<div className={classes.colorsContainer}>
							<ColorsFlipcard />
						</div>
					</div>
				</div>
				<div className={classes.description}>
					<h3>Cum îmi transpun sentimentele în culori?</h3>
					<p>
						Primul pas este să-ți oferi atenție și să observi ce senzații si
						emoții transmite corpul, sufletul sau mintea ta. Observă zonele de
						tensiune, căldură sau disconfort si încearcă să găsești un motiv
						pentru existența acelor senzații, ca mai apoi să le dai un nume.{' '}
						<a href='/ce-este-meditatia-si-cum-se-practica'>
							Află cum să practici și să facilitezi conștientizarea emoțiilor
							prin meditație.{' '}
						</a>
					</p>{' '}
				</div>
			</div>
		</>
	);
};

export default ColorPsychologyPage;
