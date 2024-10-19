import { React, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	areFramesLoading,
	selectFrames,
} from '../../../reducers/slices/framesSlice';
import getFramesAction from '../../../reducers/actions/getFramesAction';
import Loader from '../../ui/loader/Loader';
import FramesDetailsPage from './FramesDetailsPage';
const FramesPage = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(areFramesLoading);
	let frames = useSelector(selectFrames);

	useEffect(() => {
		if (frames.length === 0) {
			getFramesAction(dispatch);
		}
	}, []);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <FramesDetailsPage frames={frames} />;
	}

	return <>{content}</>;
};

export default FramesPage;
