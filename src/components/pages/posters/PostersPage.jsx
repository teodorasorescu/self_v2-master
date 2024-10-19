import { React, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectPosters,
} from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import PostersDetailsPage from './PostersDetailsPage';
const PostersPage = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	let posters = useSelector(selectPosters);
	//put in localstorage!
	useEffect(() => {
		if (posters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [dispatch, posters]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <PostersDetailsPage posters={posters} />;
	}

	return <>{content}</>;
};

export default PostersPage;
