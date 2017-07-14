import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StickyContainer, Sticky } from 'react-sticky';

import * as tracklistActions from '../core/tracklists'
import Tracklist from './tracklist';
import Header from './header'


import { FEATURED_TRACKLIST_ID } from '../core/constants'


class Browse extends Component {
	componentWillMount() {
		this.props.fetchTracks(FEATURED_TRACKLIST_ID);
	}

	render() {
		return (
			<div>
				<div className="ui very padded vertical segment">
					<div className="ui container">
						<div className="ui secondary pointing massive menu">
    					<a className="item active">
      					Tracks
    					</a>
    					<a className="item">
      					Likes
    					</a>
    					<a className="item">
      					Playlist
    					</a>
  					</div>
					</div>
				</div>

				<div className="ui container">
					<div className="tracklist">
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


