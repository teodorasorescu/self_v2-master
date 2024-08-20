import { React } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import styles from '../styling/header.module.scss';
import InstaIcon from '../images/instagram_logo.webp';
import TikTokIcon from '../images/tiktok_logo.webp';
import Badge from '@mui/material/Badge';
import { makeStyles } from '@mui/styles';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, MenuItem, Toolbar } from '@mui/material';
import ShoppingBag from '../images/cart.webp';
import Self from '../images/self_logo.webp';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
import { Helmet } from 'react-helmet';

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
	{
		label: 'Despre SELF',
		href: '/despre-self',
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

	const useStyles = makeStyles(() => ({
		toolbar: {
			paddingRight: 0,
			paddingLeft: 0,
		},
	}));

	const classes = useStyles();

	const closeDrawer = () => {
		setDrawerOpen(false);
	};

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<a
					href={href}
					{...{
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
				</a>
			);
		});
	};

	const getContactChoices = () => {
		return contactData.map(({ label, href }) => {
			return (
				<a
					href={href}
					{...{
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
				</a>
			);
		});
	};

	return (
		<div>
			{/* <div className={styles.promotionTextContainer}>
				<p>Transport gratuit la comenzi peste 240 RON! </p>
			</div> */}
			<Helmet>
				<link
					rel='icon'
					type='image/png'
					href='https://selfposters.ro/favicon.png'
				/>
			</Helmet>
			<div className={styles.stillPositionContainer}>
				<Toolbar sx={{ paddingRight: 0, paddingLeft: 0 }}>
					<IconButton
						color='inherit'
						aria-label='menu'
						aria-haspopup='true'
						onClick={openDrawer}
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
								<a href={INSTAGRAM_LINK}>
									<img
										style={{
											width: '25px',
											height: '25px',
											margin: 'none',
											border: 'none',
										}}
										src={InstaIcon}
										alt='instagram'
									/>
								</a>
							</MenuItem>
							<MenuItem>
								<a href={TIKTOK_LINK}>
									<img
										style={{
											width: '25px',
											height: '25px',
											margin: 'none',
											border: 'none',
										}}
										alt='tiktok'
										src={TikTokIcon}
									/>
								</a>
							</MenuItem>
						</div>
					</Drawer>
				</Toolbar>
				<a href='/'>
					<img src={Self} alt='SELF Logo - Embrace yourself with colors' />
				</a>
				<div className={styles.shoppingButton}>
					<a href='/cos-de-cumparaturi' style={{ color: 'black' }}>
						<Badge
							color='primary'
							sx={{
								'& .MuiBadge-colorPrimary': {
									backgroundColor: '#7684ff',
									color: '#fff7e3',
								},
							}}
							badgeContent={Number.parseInt(localStorage.getItem('itemCount'))}
						>
							<img
								src={ShoppingBag}
								className={styles.iconSize}
								alt='cos de cumparaturi'
							/>{' '}
						</Badge>
					</a>
				</div>
			</div>
		</div>
	);
};
export default SmartphoneHeader;
