import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arePostersLoading } from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import ProductsHomeShowcase from '../products/ProductsHomeShowcase';

const PostersHomeLoading = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	const storedPosters = JSON.parse(localStorage.getItem('posters'));

	useEffect(() => {
		if (storedPosters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [storedPosters, dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<ProductsHomeShowcase
				products={storedPosters}
				href={'/posters'}
				title={'Selected for you'}
			/>
		);
	}

	return <>{content}</>;
};

export default PostersHomeLoading;
