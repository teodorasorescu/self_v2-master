export const getLockerPluginInstance = () => {
	const clientId = process.env.REACT_APP_CLIENT_ID_SAMEDAY; //each integrator will have an unique clientId
	const countryCode = 'RO';
	const langCode = 'ro';
	const city = 'Sectorul 3';
	const county = 'Bucuresti';
	const favLockerId = 143;
	const theme = 'light';
	window.LockerPlugin.init({
		clientId: clientId,
		countryCode: countryCode,
		langCode: langCode,
		city: city,
		county: county,
		favLockerId: favLockerId,
		theme: theme,
	});

	return window.LockerPlugin.getInstance();
};
