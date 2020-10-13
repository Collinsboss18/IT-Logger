import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TechSelectOptions from '../techs/TechSelectOptions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ updateLog, current }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a Message and Tech' });
		} else {
      //
      const updLog = { id: current.id, message, attention, tech, date: new Date() };
      updateLog(updLog);
      M.toast({ html: `Log updated by ${tech}` });
			// Clear Fields
			setMessage('');
			setAttention(false);
			setTech('');
		}
	};

	return (
		<div id={'edit-log-modal'} className={'modal'}>
			<div className={'modal-content'}>
				<h4>Enter System Log</h4>
				<div className={'row'}>
					<div className={'input-field'}>
						<input
							type={'text'}
							placeholder={'Log Message'}
							name={'message'}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<label htmlFor={'message'} className={'active'}>
							Log Message
						</label>
					</div>
				</div>
				<div className={'row'}>
					<div className={'input-field'}>
						<select name={'tech'} value={tech} className={'browser-default'} onChange={(e) => setTech(e.target.value)}>
							<option value='' disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>
				<div className={'row'}>
					<div className={'input-field'}>
						<p>
							<label>
								<input
									name={'attention'}
									type={'checkbox'}
									className={'fill-in'}
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className={'modal-footer'}>
				<a href={'#!'} className={'modal-close white btn btn-flat'}>
					Cancel
				</a>
				<a href={'#!'} onClick={onSubmit} className={'modal-close waves-effect blue waves-light btn'}>
					Enter
				</a>
			</div>
		</div>
	);
};

EditLogModal.propTypes = {
	updateLog: PropTypes.func.isRequired,
	current: PropTypes.object,
};

const mapStateToProps = (state) => ({
	current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
