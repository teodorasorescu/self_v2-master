import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ColorPickerGradient from './components/ColorPickerGradient';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { useStateContext } from './contexts/ContextProvider';
import Inspiration from './components/Inspiration';

function App() {
	const { headerOn, setHeaderOn } = useStateContext();
	if (localStorage.getItem('itemCount') == null) {
		localStorage.setItem('itemCount', 0);
	}

	if (localStorage.getItem('products') == null) {
		localStorage.setItem('products', JSON.stringify([]));
	}
	return (
		<div className='App'>
			<BrowserRouter>
				{headerOn && <Header />}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/alegeculorile' element={<ColorPickerGradient />} />
					<Route path='/cosdecumparaturi' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/inspiratie' element={<Inspiration />} />
				</Routes>
				{/* <Footer/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
