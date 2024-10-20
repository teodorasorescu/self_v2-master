import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arePostersLoading } from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import PostersDetailsPage from './PostersDetailsPage';

const PostersPage = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	const storedPosters = JSON.parse(localStorage.getItem('posters'));
	useEffect(() => {
		//if (storedPosters.length === 0) {
		getPostersAction(dispatch);
		//}
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <PostersDetailsPage posters={storedPosters} />;
	}

	return <>{content}</>;
};

export default PostersPage;
