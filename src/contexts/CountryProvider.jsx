import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_PATH } from '../constants/links';

const CountryContext = createContext();

export function CountryProvider({ children }) {
	const [countryCode, setCountryCode] = useState('RO');

	useEffect(() => {
		let savedCode = localStorage.getItem('countryCode');
		if (savedCode === 'DE') {
			savedCode = 'RO';
		}
		savedCode = 'HU';
		if (savedCode) {
			setCountryCode(savedCode);
		} else {
			axios
				.get(`${BACKEND_PATH}/location/country`)
				.then((response) => {
					const code = response.data.country;
					if (code) {
						localStorage.setItem('countryCode', code);
						if (code === 'DE') {
							code = 'RO';
						}
						setCountryCode(code);
					}
				})
				.catch((error) => {
					console.error('Failed to fetch country code:', error);
				});
		}
	}, []);

	return (
		<CountryContext.Provider value={{ countryCode, setCountryCode }}>
			{children}
		</CountryContext.Provider>
	);
}

export const useCountry = () => useContext(CountryContext);
