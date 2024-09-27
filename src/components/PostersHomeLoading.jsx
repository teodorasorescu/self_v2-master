import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectPosters,
} from '../reducers/slices/postersSlice';
import getPostersAction from '../reducers/actions/getPostersAction';
import Loader from './ui/loader/Loader';
import PostersHomeShowcase from './PostersHomeShowcase';

const PostersHomeLoading = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	useEffect(() => {
		getPostersAction(dispatch);
	}, []);

	let content;
	let posters = useSelector(selectPosters);

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <PostersHomeShowcase posters={posters} />;
	}

	return <>{content}</>;
};

export default PostersHomeLoading;
