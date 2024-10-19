import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	areFramesLoading,
	selectFrames,
} from '../../../reducers/slices/framesSlice';
import getFramesAction from '../../../reducers/actions/getFramesAction';
import Loader from '../../ui/loader/Loader';
import ProductsHomeShowcase from '../products/ProductsHomeShowcase';

const FramesHomeLoading = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(areFramesLoading);
	useEffect(() => {
		getFramesAction(dispatch);
	}, []);

	let content;
	let frames = useSelector(selectFrames);

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<ProductsHomeShowcase
				products={frames}
				href={'/frames'}
				title={'Frames'}
			/>
		);
	}

	return <>{content}</>;
};

export default FramesHomeLoading;
