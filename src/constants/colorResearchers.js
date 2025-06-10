import { S3_BUCKET } from './links';

const Goethe = S3_BUCKET + '/Goethe.webp';
const ML = S3_BUCKET + '/ML.webp';
const EvaHeller = S3_BUCKET + '/EvaHeller.webp';
const KarenHaller = S3_BUCKET + '/KarenHaller.webp';

const colorResearchers = [
	{
		researcher: 'Goethe',
		desc: 'Goethe was one of the first to study the psychological effects of colors! In his 1810 book "Theory of Colors," he was the first to propose the idea that colors were not just physical phenomena but also had psychological effects on people. He argued that each color had a specific characteristic and could evoke emotional and psychological responses. This work had a significant impact on the creative field and is still studied today.',
		image: `url(${Goethe})`,
	},
	{
		researcher: 'Max Lüscher',
		desc: 'Max Lüscher was a Swiss psychotherapist who developed the Lüscher Color Test, a tool used to measure a person\'s psychological state and personality traits based on their color preferences. This test has been translated into more than 30 foreign languages, and his state-color attribution method is still used in universities worldwide.',
		image: `url(${ML})`,
	},
	{
		researcher: 'Eva Heller',
		desc: 'German author and psychologist Eva Heller wrote the book "The Psychology of Color: Effects and Symbolism," which explores the psychological impact of colors on human beings. She emphasizes that color associations are not random or based solely on personal taste but are instead rooted in behavior and experiences.',
		image: `url(${EvaHeller})`,
	},
	{
		researcher: 'Karen Haller',
		desc: 'Karen Haller is a renowned expert in applied color psychology. She specializes in understanding how color affects human behavior and emotions. With additional training in interior design, she helps people integrate colors into their spaces. She compiled her knowledge in the book "The Little Book of Colour," where she explores the impact of colors on human life, offering a practical approach.',
		image: `url(${KarenHaller})`,
	},
];
export default colorResearchers;
