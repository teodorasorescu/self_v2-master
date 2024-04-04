import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ColorPickerGradient from './components/ColorPickerGradient';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { useStateContext } from './contexts/ContextProvider';
import Inspiration from './components/Inspiration';
import ColorPsychologyPage from './components/ColorPsychologyPage';
import Footer from './components/Footer';
import OrderConfirmation from './components/OrderConfirmation';
import AddProduct from './components/AddProduct';

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
					<Route path='/personalizare' element={<ColorPickerGradient />} />
					<Route path='/cos-de-cumparaturi' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/inspiratie' element={<Inspiration />} />
					<Route
						path='/psihologia-culorilor'
						element={<ColorPsychologyPage />}
					/>
					<Route path='/adaugă-produs' element={<AddProduct />} />
					<Route path='/confirmare-comanda' element={<OrderConfirmation />} />
				</Routes>
				{headerOn && <Footer />}
			</BrowserRouter>
		</div>
	);
}

export default App;
