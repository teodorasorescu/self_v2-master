import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectCards,
} from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import CardItemsShowcase from '../../features/cardsShowcaseItems/CarditemsShowcase';

const CardsShowcase = ({ title, group }) => {
	const dispatch = useDispatch();

	const cards = useSelector(selectCards);
	const isPageLoading = useSelector(arePostersLoading);

	const [storedPosters, setStoredPosters] = useState(() => {
		const saved = localStorage.getItem('cards');
		return saved ? JSON.parse(saved) : [];
	});

	// fetch posters on initial load or when "group" changes
	useEffect(() => {
		if (group) {
			getPostersAction(dispatch, group);
		}
	}, [group]);

	// sync Redux cards → localStorage
	useEffect(() => {
		if (cards && cards.length > 0) {
			const allowedTitles = [
				'Heart',
				"Galentine's Day",
				'Love Birds',
				'Horse',
				'Make a Wish',
			];

			const filteredCards = cards.filter((card) =>
				allowedTitles.includes(card.title),
			);
			setStoredPosters(filteredCards);
			localStorage.setItem('cards', JSON.stringify(filteredCards));
		}
	}, [cards]);

	if (isPageLoading && storedPosters.length === 0) {
		return <Loader />;
	}

	return <CardItemsShowcase products={storedPosters} title={title} />;
};

export default CardsShowcase;
