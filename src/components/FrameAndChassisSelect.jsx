import { useDispatch, useSelector } from 'react-redux';
import '../styling/frameChassisSelect.css';
import getFramesStockAction from '../reducers/actions/getFramesStockAction';
import getChassisStockAction from '../reducers/actions/getChassisStockAction';
import {
	selectChassisStock,
	selectFramesStock,
} from '../reducers/slices/stockSlice';
import { frameColors } from '../constants/frameColors';
import { chassisPrices, framePrices } from '../constants/productConstants';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const FrameAndChassisSelect = ({
	frameColor,
	chassis,
	setFrameColor,
	setChassis,
	setSize,
	size,
}) => {
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

	useEffect(() => {
		getFramesStockAction(dispatch);
		getChassisStockAction(dispatch);
	}, []);

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
					<option value='21x30cm'>21x30cm</option>
					<option value='30x40cm'>30x40cm</option>
				</select>
			</div>

			<div className='frameContainer'>
				<h6>Montare pe cadru de lemn</h6>
				<select
					id='chassis'
					name='chassis'
					className='form-select'
					placeholder='Montare pe cadru de lemn'
					onChange={(e) => setChassisField(e.target.value === 'true')}
				>
					<option value='false'>Nu</option>
					<option
						disabled={chassisStock == 0 || frameColor !== 'fără' ? true : false}
						value='true'
					>
						Da + {chassisPrices.get(size)} lei
					</option>
				</select>
			</div>
			<div className='frameContainer'>
				<h6>Rame din lemn natural</h6>
				<select
					id='culoare_ramă'
					name='culoare_ramă'
					className='form-select'
					placeholder='Culoare ramă'
					onChange={setField}
				>
					<option value='fără'>Continuă fără ramă</option>
					{frameColors.map((color, index) => {
						return (
							<option
								disabled={framesStock == 0 || chassis == true ? true : false}
								key={`color-${index}`}
								value={color}
							>
								{color} + {framePrices.get(size)} lei
							</option>
						);
					})}
				</select>
			</div>
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
