import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [itemCount, setItemCountt] = useState(0);
	const [headerOn, setHeaderOn] = useState(true);
	const [orderResume, setOrderResume] = useState(false);
	const [resume, setResume] = useState(false);

	const [customer, setCustomer] = useState({
		id: '',
		email: '',
		firstName: '',
		lastName: '',
		addressLine: '',
		city: '',
		state: '',
		country: '',
		postalCode: '',
		hasSubmited: false,
		products: [],
		newsletter: false,
	});

	const [drawerOpen, setDrawerOpen] = useState(false);

	const setItemCount = (count) => {
		setItemCountt(count);
		localStorage.setItem('itemCount', count);
	};

	return (
		<StateContext.Provider
			value={{
				itemCount,
				setItemCount,
				headerOn,
				setHeaderOn,
				customer,
				setCustomer,
				drawerOpen,
				setDrawerOpen,
				orderResume,
				setOrderResume,
				resume,
				setResume,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
