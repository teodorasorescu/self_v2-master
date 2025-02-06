import classes from './tag.module.scss';

export const Tag = ({ title }) => {
	return <div className={classes.limitedTag}>{title}</div>;
};

export default Tag;
