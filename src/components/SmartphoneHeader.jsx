import { React } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import styles from '../styling/header.module.scss';

import Badge from '@mui/material/Badge';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, MenuItem, Toolbar } from '@mui/material';
import { Helmet } from 'react-helmet';
import { contactData, headersData } from '../constants/productConstants';
import { S3_BUCKET } from '../constants/links';
import { TIKTOK_LINK } from '../constants/socialMediaLinks';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';
const instaIcon = S3_BUCKET + '/instagram_logo.webp';
const tiktokIcon = S3_BUCKET + '/tiktok_logo.webp';
const shoppingBagImg = S3_BUCKET + '/box.webp';
const selfLogo = S3_BUCKET + '/self_logo.webp';

const SmartphoneHeader = () => {
	const { drawerOpen, setDrawerOpen } = useStateContext();

	const itemCount = Number.parseInt(localStorage.getItem('itemCount'));
	const openDrawer = () => {
		setDrawerOpen(true);
	};

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
							fontFamily: "'Raleway', sans-serif",
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
							fontFamily: "'Raleway', sans-serif",
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
			<div className={styles.promotionTextContainer}>
				<p>
					GET 10% OFF BY JOINING <a href='our-club'>OUR CLUB</a>!
				</p>
			</div>
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
										src={instaIcon}
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
										src={tiktokIcon}
									/>
								</a>
							</MenuItem>
						</div>
					</Drawer>
				</Toolbar>
				<a href='/'>
					<img
						src={selfLogo}
						alt='SELF POSTERS Logo - Embrace yourself with colors'
					/>
				</a>
				<div className={styles.shoppingButton}>
					<a href='/cart' style={{ color: 'black' }}>
						<Badge
							color='primary'
							badgeContent={Number.isNaN(itemCount) ? 0 : itemCount}
							sx={{
								'& .MuiBadge-colorPrimary': {
									backgroundColor: '#7684ff',
									color: '#fff7e3',
								},
							}}
						>
							<img
								src={shoppingBagImg}
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
