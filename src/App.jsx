import './App.css';

import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { useStateContext } from './contexts/ContextProvider';
import Footer from './components/Footer';
import OrderConfirmation from './components/OrderConfirmation';
import OurStoryPage from './components/OurStoryPage';
import SustenabilityPage from './components/SustenabilityPage';
import TermsAndConditions from './components/TermsAndConditions';
import Confidentiality from './components/Confidentiality';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ui/scroll/ScrollToTop.js';
import PageNotFound from './components/PageNotFound';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import PosterDetails from './components/features/posters/PosterDetails.jsx';
import PostersPage from './components/pages/posters/PostersPage.jsx';
import StickerDetails from './components/features/stickers/StickerDetails.jsx';
import OurClubPage from './components/pages/ourclub/OurClubPage.jsx';
import JournalPage from './components/pages/journal/principalPage/JournalPage.jsx';
import GiftGuide from './components/pages/journal/giftguide/GiftGuide.jsx';
import ArtistJournalPage from './components/pages/artistJournalPage/ArtistJournalPage.jsx';
import Preframe from './components/pages/preframeCollection/Preframe.jsx';
import SignUpModal from './components/features/signUpModal/SignUpModal.jsx';
import QuizPage from './components/features/quiz/Quiz.jsx';
import QuizResult from './components/pages/quizResult/QuizResult.jsx';
import EventPage from './components/pages/event/EventPage.jsx';
import PaintAndSipLake from './components/pages/journal/events/paintAndSip/PaintAndSipLake.jsx';
import AutumnCollectionArticle from './components/pages/journal/autumcollection/AutumnCollectionArticle.jsx';
import CardsPage from './components/pages/cards/CardsPage.jsx';
import CardDetails from './components/features/cardDetails/CardDetails.jsx';
import PavArticle from './components/pages/journal/pav/Pav.jsx';
import IntentionsArticle from './components/pages/journal/whyIntentionsMatter/IntentionsArticle.jsx';

function App() {
	const { headerOn, setHeaderOn } = useStateContext();

	useEffect(() => {
		ReactGA.initialize('G-VBCPDM60NT');

		if (localStorage.getItem('discountValue') === null) {
			localStorage.setItem('discountValue', 0);
		}

		if (localStorage.getItem('products') === null) {
			localStorage.setItem('products', JSON.stringify([]));
		}

		localStorage.setItem('posters', JSON.stringify([]));
		if (localStorage.getItem('itemCount') === null) {
			localStorage.setItem('itemCount', 0);
		}
	}, []);

	return (
		<div className='App'>
			<SignUpModal />

			<BrowserRouter>
				<ScrollToTop />
				{headerOn && <Header />}
				<Routes>
					<Route
						path='/canvas-art-prints/:urlTitle'
						element={<PosterDetails />}
					/>
					<Route path='/wish-cards/:urlTitle' element={<CardDetails />} />
					<Route path='/clay-objects/:urlTitle' element={<StickerDetails />} />
					<Route path='/quiz-result' element={<QuizResult />} />
					<Route path='/journal/:urlTitle' element={<ArtistJournalPage />} />
					<Route path='/new-collection' element={<Preframe />} />
					<Route path='/canvas-art-prints' element={<PostersPage />} />
					<Route path='*' element={<PageNotFound />} />
					<Route path='/' element={<Home />} />
					<Route path='/quiz' element={<QuizPage />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/wish-cards' element={<CardsPage />} />
					<>
						<Route path='/journal' element={<JournalPage />} />
						<Route path='/journal/gift-guide' element={<GiftGuide />} />
						<Route
							path='/journal/paint-and-sip-by-the-lake'
							element={<PaintAndSipLake />}
						/>
						<Route
							path='/journal/autumn-collection'
							element={<AutumnCollectionArticle />}
						/>
						<Route
							path='/journal/why-intention-shapes-a-better-life'
							element={<IntentionsArticle />}
						/>
						<Route
							path='/journal/about-pav-self-expression-through-art'
							element={<PavArticle />}
						/>
					</>
					<Route path='/event' element={<EventPage />} />

					<Route path='/artsy-club' element={<OurClubPage />} />
					<Route path='/order-confirmation' element={<OrderConfirmation />} />
					<Route path='/about-us' element={<OurStoryPage />} />
					<Route path='/sustainability' element={<SustenabilityPage />} />
					<Route
						path='/terms-and-conditions'
						element={<TermsAndConditions />}
					/>
					<Route path='/privacy-policy' element={<Confidentiality />} />
					<Route path='/faq' element={<FAQPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
				{headerOn && <Footer />}{' '}
			</BrowserRouter>
		</div>
	);
}

export default App;
