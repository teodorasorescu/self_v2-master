import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ColorPickerGradient from './components/ColorPickerGradient';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { useStateContext } from './contexts/ContextProvider';
import Inspiration from './components/Inspiration';
import ColorPsychologyPage from './components/ColorPsychologyPage.jsx';
import Footer from './components/Footer';
import OrderConfirmation from './components/OrderConfirmation';
import AddProduct from './components/AddProduct';
import OurStoryPage from './components/OurStoryPage';
import SustenabilityPage from './components/SustenabilityPage';
import TermsAndConditions from './components/TermsAndConditions';
import Confidentiality from './components/Confidentiality';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import PageNotFound from './components/PageNotFound';
import ComingSoonPage from './components/ComingSoonPage';

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
				<ScrollToTop />
				{headerOn && <Header />}
				<Routes>
					<Route path='*' element={<PageNotFound />} />
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
					<Route path='/despre-self' element={<OurStoryPage />} />
					<Route path='/sustenabilitate' element={<SustenabilityPage />} />
					<Route path='/termeni-și-condiții' element={<TermsAndConditions />} />
					<Route
						path='/politica-de-confidențialitate'
						element={<Confidentiality />}
					/>
					<Route path='/faq' element={<FAQPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
				{headerOn && <Footer />}
			</BrowserRouter>
		</div>
	);
}

export default App;
