import { createContext, useContext, useState } from 'react';

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
		address: '',
		addressInfo: '',
		phoneNumber: '',
		cityId: '',
		state: '',
		country: '',
		postalCode: '',
		lockerId: 0,
		newsletter: false,
		shippingMethod: 1,
	});

	const [quizResult, setQuizResult] = useState([]);
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
				quizResult,
				setQuizResult,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
