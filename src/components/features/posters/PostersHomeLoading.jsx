import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectPosters,
} from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import ProductsHomeShowcase from '../products/ProductsHomeShowcase';

const PostersHomeLoading = () => {
	const dispatch = useDispatch();
	let posters = useSelector(selectPosters);
	const isPageLoading = useSelector(arePostersLoading);

	useEffect(() => {
		if (posters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [posters, dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<ProductsHomeShowcase
				products={posters}
				href={'/posters'}
				title={'Selected for you'}
			/>
		);
	}

	return <>{content}</>;
};

export default PostersHomeLoading;
