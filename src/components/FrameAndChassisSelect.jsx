import { useDispatch, useSelector } from 'react-redux';
import '../styling/frameChassisSelect.css';
import getFramesStockAction from '../reducers/actions/getFramesStockAction';
import getChassisStockAction from '../reducers/actions/getChassisStockAction';
import {
	selectChassisStock,
	selectFramesStock,
} from '../reducers/slices/stockSlice';
import { chassisPrices, framePrices } from '../constants/productConstants';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { getLocalizedPrice } from '../constants/utils';
import ImageModal from './ui/imgModal/ImageModal';
import sizeGuideImage from './sizeGuide.png';
const FrameAndChassisSelect = ({
	product,
	frameColor,
	chassis,
	setFrameColor,
	setChassis,
	setSize,
	size,
	countryCode,
}) => {
	const initialPrice = {
		price: 0,
		currency: 'RON',
	};

	const [chassisPrice, setChassisPrice] = useState(initialPrice);
	const [framePrice, setFramePrice] = useState(initialPrice);
	const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
	const setField = (event) => {
		setFrameColor(event.target.value);
	};

	const setChassisField = (value) => {
		setChassis(value);
	};

	const setSizeField = (event) => {
		setSize(event.target.value);
	};

	const framesStock = useSelector(selectFramesStock);
	const chassisStock = useSelector(selectChassisStock);
	const dispatch = useDispatch();

	const getChassisBySize = (size) => {
		setChassisPrice(getLocalizedPrice(chassisPrices.get(size), countryCode));
	};

	const getFrameBySize = (size) => {
		setFramePrice(getLocalizedPrice(framePrices.get(size), countryCode));
	};

	const isArtist = product.artist !== null;
	const artistSpecialSizes = {
		15: ['25x25cm', '50x50cm'],
		16: ['20x25cm', '50x40cm'],
	};

	const specialSizes = isArtist
		? artistSpecialSizes[product.artist.id] || []
		: [];

	const defaultSizes = ['13x18cm', '21x30cm', '30x40cm', '50x70cm'];
	const sizesToShow =
		specialSizes && specialSizes.length > 0 ? specialSizes : defaultSizes;

	useEffect(() => {
		getFramesStockAction(dispatch);
		getChassisStockAction(dispatch);
	}, []);

	useEffect(() => {
		getChassisBySize(size);
		getFrameBySize(size);
	}, [size]);

	return (
		<div>
			<div className='frameContainer'>
				<h6>Size</h6>
				<select
					id='size'
					name='size'
					className='form-select'
					placeholder='Size'
					onChange={setSizeField}
				>
					{sizesToShow.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</select>
			</div>
			<p className='sizeGuide' onClick={() => setIsSizeGuideOpen(true)}>
				Size Guide
			</p>

			<ImageModal
				isOpen={isSizeGuideOpen}
				onClose={() => setIsSizeGuideOpen(false)}
				imageSrc={sizeGuideImage}
				alt='Size Guide Table'
			/>
			<div className='frameContainer'>
				<h6>Ready to Hang?</h6>
				<select
					id='chassis'
					name='chassis'
					className='form-select'
					placeholder='Wooden Frame Streched Canvas'
					onChange={(e) => setChassisField(e.target.value === 'true')}
				>
					<option value='false'>No</option>

					{chassisPrice.price !== undefined && chassisPrice.price !== null && (
						<option
							disabled={
								chassisStock === 0 || frameColor !== 'none' ? true : false
							}
							value='true'
						>
							Yes + {chassisPrice.price + ' ' + chassisPrice.currency}
						</option>
					)}
				</select>
			</div>
			{/* <div className='frameContainer'>
				<h6>Natural Wooden Frames</h6>
				<select
					id='culoare_ramă'
					name='culoare_ramă'
					className='form-select'
					placeholder='Frame'
					onChange={setField}
				>
					<option value='none'>No Frame</option>
				</select>
			</div> */}
		</div>
	);
};

FrameAndChassisSelect.propTypes = {
	chassis: PropTypes.bool,
	frameColor: PropTypes.string,
	size: PropTypes.string,

	setFrameColor: PropTypes.func,
	setChassis: PropTypes.func,
	setSize: PropTypes.func,
};

FrameAndChassisSelect.defaultProps = {
	chassis: noop,
	frameColor: noop,
	setFrameColor: noop,
	setChassis: noop,
	size: noop,
	setSize: noop,
};

export default FrameAndChassisSelect;
