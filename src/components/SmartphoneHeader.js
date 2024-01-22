import { React } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import styles from '../styling/header.module.scss';
import FacebookIcon from '../images/facebook_logo.png';
import InstaIcon from '../images/instagram_logo.png';
import TikTokIcon from '../images/tiktok_logo.png';
import Badge from '@material-ui/core/Badge';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Drawer, MenuItem, Toolbar } from '@material-ui/core';
import ShoppingBag from '../images/cart.png';
import Self from '../images/self_logo.png';
const headersData = [
	{
		label: 'Acasă',
		href: '/',
	},
	{
		label: 'Psihologia Culorilor',
		href: '/psihologia-culorilor',
	},
	{
		label: 'Inspirație',
		href: '/inspiratie',
	},
];

const contactData = [
	{
		label: 'FAQ',
		href: '/faq',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

const SmartphoneHeader = () => {
	const { drawerOpen, setDrawerOpen } = useStateContext();

	const openDrawer = () => {
		setDrawerOpen(true);
	};

	const closeDrawer = () => {
		setDrawerOpen(false);
	};
	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						to: href,
						style: {
							textDecoration: 'none',
							color: 'black',
						},
						key: label,
					}}
				>
					<MenuItem
						style={{
							fontSize: '20px',
							fontFamily: "'Roboto', sans-serif",
							paddingTop: '3%',
						}}
						onClick={closeDrawer}
					>
						{label}
					</MenuItem>
				</Link>
			);
		});
	};

	const getContactChoices = () => {
		return contactData.map(({ label, href }) => {
			return (
				<Link
					{...{
						to: href,
						style: { textDecoration: 'none', color: 'black' },
						key: label,
					}}
				>
					<MenuItem
						style={{
							borderTop: '0.1ch solid rgba(159, 153, 153, 0.379)',
							paddingBottom: '3%',
							paddingTop: '3%',
						}}
					>
						{label}
					</MenuItem>
				</Link>
			);
		});
	};

	return (
		<div>
			<div className={styles.promotionTextContainer}>
				<p>Transport gratuit la comenzi peste 240 RON! </p>
			</div>
			<div className={styles.stillPositionContainer}>
				<Toolbar>
					<IconButton
						{...{
							color: 'inherit',
							'aria-label': 'menu',
							'aria-haspopup': 'true',
							onClick: openDrawer,
						}}
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						{...{
							anchor: 'left',
							open: drawerOpen,
							onClose: closeDrawer,
						}}
					>
						<div
							style={{
								borderBottom: '0.1ch solid rgba(159, 153, 153, 0.379)',
								paddingBottom: '3%',
							}}
						>
							<ClearOutlinedIcon
								style={{
									position: 'relative',
									fontSize: '30px',
									left: '310px',
									color: 'grey',
									marginTop: '10px',
									cursor: 'pointer',
								}}
								onClick={closeDrawer}
							/>
						</div>
						<div style={{ width: '350px' }}>{getDrawerChoices()}</div>

						<div style={{ paddingTop: '10%' }}>{getContactChoices()}</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								margin: '0',
								borderTop: '0.1ch solid rgba(159, 153, 153, 0.379)',
								paddingTop: '3%',
							}}
						>
							<MenuItem>
								<Link>
									<img
										style={{
											width: '25px',
											height: '25px',
											margin: 'none',
											border: 'none',
										}}
										src={FacebookIcon}
										alt='description'
									/>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link>
									<img
										style={{
											width: '25px',
											height: '25px',
											margin: 'none',
											border: 'none',
										}}
										src={InstaIcon}
										alt='description'
									/>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link>
									<img
										style={{
											width: '25px',
											height: '25px',
											margin: 'none',
											border: 'none',
										}}
										alt='description'
										src={TikTokIcon}
									/>
								</Link>
							</MenuItem>
						</div>
					</Drawer>
				</Toolbar>
				<img src={Self} />{' '}
				<div className={styles.shoppingButton}>
					<Link to='/cos-de-cumparaturi' style={{ color: 'black' }}>
						<Badge
							color='primary'
							className={styles.iconSize}
							badgeContent={Number.parseInt(localStorage.getItem('itemCount'))}
						>
							<img src={ShoppingBag} className={styles.iconSize} />{' '}
						</Badge>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SmartphoneHeader;
