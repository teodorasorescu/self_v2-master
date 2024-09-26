import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../styling/addProduct.css';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectPosters,
} from '../reducers/slices/postersSlice';
import getPostersAction from '../reducers/actions/getPostersAction';
import Loader from './ui/loader/Loader';
const PostersPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isPageLoading = useSelector(arePostersLoading);
	useEffect(() => {
		getPostersAction(dispatch);
	}, []);

	let content;
	let posters = useSelector(selectPosters);

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<div>
				<h1>Products List</h1>
				<ul>
					{posters.map((poster) => (
						<li key={poster.urlTitle}>
							<Link to={`/posters/${poster.urlTitle}`}>{poster.title}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}

	return <>{content}</>;
};

export default PostersPage;
