export const getLockerPluginInstance = (countryCode) => {
	const clientId = process.env.REACT_APP_CLIENT_ID_SAMEDAY;
	const city = 'Iasi';
	const county = 'Iasi';
	const favLockerId = 4720;
	const theme = 'light';
	window.LockerPlugin.init({
		clientId: clientId,
		countryCode: countryCode,
		langCode: countryCode,
		city: city,
		county: county,
		favLockerId: favLockerId,
		theme: theme,
	});

	return window.LockerPlugin.getInstance();
};
