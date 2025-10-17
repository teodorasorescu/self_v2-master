export const getLockerPluginInstance = (countryCode) => {
	const clientId = process.env.REACT_APP_CLIENT_ID_SAMEDAY;
	const city = 'Sectorul 3';
	const county = 'Bucuresti';
	const favLockerId = 6091;
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
