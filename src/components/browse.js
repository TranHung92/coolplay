import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tracklistActions from '../core/tracklists'
import Tracklist from './tracklist';

import { FEATURED_TRACKLIST_ID } from '../core/constants'


class Browse extends Component {
	componentDidMount() {
		this.props.fetchTracks(FEATURED_TRACKLIST_ID);
	}

	render() {
		return (
			<div className='browse'>
				<h3>This is browse</h3>
				<Tracklist />
			</div>
		)
	}
}



function mapDispatchToProps(dispatch) {
	return {
		fetchTracks: bindActionCreators(tracklistActions.fetchTracksFulfilled, dispatch),
	}
}

export default connect(null, mapDispatchToProps)(Browse)


