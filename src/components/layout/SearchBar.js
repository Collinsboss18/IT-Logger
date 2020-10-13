import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
	const text = useRef('');
	const onChange = (e) => {
		searchLogs(text.current.value);
	};
	const onSubmit = (e) => {
    e.preventDefault();
    searchLogs(text.current.value);
	};

	return (
		<nav className={'blue mb4'}>
			<div className={'nav-wrapper'}>
				<form onSubmit={onSubmit}>
					<div className={'input-field'}>
						<input type={'search'} id={'search'} placeholder={'Search logs...'} ref={text} onChange={onChange} />
						<label className={'label-icon'} htmlFor={'search'}>
							{/* <i className={'material-icon'}>search</i> */}
							<i className={'fa fa-search'} />
						</label>
						<i className={'fa fa-close fa-2x'} />
					</div>
				</form>
			</div>
		</nav>
	);
};

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
