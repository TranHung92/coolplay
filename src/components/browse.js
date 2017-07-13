import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tracklistActions from '../core/tracklists'
import Tracklist from './tracklist';


import { FEATURED_TRACKLIST_ID } from '../core/constants'


class Browse extends Component {
	componentWillMount() {
		this.props.fetchTracks(FEATURED_TRACKLIST_ID);
	}

	render() {
		return (
			<div className="ui container">
				<h3>This is browse</h3>
				<div className="ui centered">
					<div>
						<Tracklist />
					</div>
				</div>
				
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


