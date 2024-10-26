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
	let storedPosters = useSelector(selectPosters);

	useEffect(() => {
		getPostersAction(dispatch);
	}, [dispatch]);

	console.log(storedPosters);
	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <PostersDetailsPage posters={storedPosters} />;
	}

	return <>{content}</>;
};

export default PostersPage;
