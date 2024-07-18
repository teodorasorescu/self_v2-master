export const getLockerPluginInstance = () => {
	const clientId = '11d773d6-5a44-4c48-8e69-72590241bb4b'; //each integrator will have an unique clientId
	const countryCode = 'RO'; //country for which the plugin is used
	const langCode = 'ro'; //language of the plugin
	const city = 'Craiova'; //User's default city to be displayed at start
	const county = 'Dolj'; //User's default county to be displayed at start
	const favLockerId = 143; //User's favorite locker which will be pre-selected at start. If favourite locker exists, city and county will be negligible.
	const theme = 'light'; //theme of the plugin: light, dark
	const apiUsername = 'sameday'; //integrator LM Username
	const filters = [{ posOnly: false }]; //default filters for lockers
	window.LockerPlugin.init({
		clientId: clientId,
		countryCode: countryCode,
		langCode: langCode,
		city: city,
		county: county,
		favLockerId: favLockerId,
		theme: theme,
		apiUsername: apiUsername,
		filters: filters,
	});

	return window.LockerPlugin.getInstance();
};
