import DropdownBase from '../../ui/dropdown/DropdownBase';
import styles from './subheader.module.scss';

const SubheaderDropdown = ({ label, subheaders, dropdownWidth }) => {
	return (
		<DropdownBase label={label} dropdownWidth={dropdownWidth}>
			{subheaders.map((item, index) => (
				<p key={index}>
					<a href={item.href} className={styles.subheaderLink}>
						{item.label}
					</a>
				</p>
			))}
		</DropdownBase>
	);
};

export default SubheaderDropdown;
