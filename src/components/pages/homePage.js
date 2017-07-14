import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tracklistActions from '../../core/tracklists'
import Tracklist from '../tracklist';
import UserCard from '../userCard'

import { FEATURED_TRACKLIST_ID } from '../../core/constants'


class HomePage extends Component {
	componentDidUpdate() {
  if(this.scrolled === false){
    window.scrollTo(0,0);
    this.scrolled = true;
  }
}

	componentWillMount() {
		this.props.fetchTracks(FEATURED_TRACKLIST_ID);
		this.props.fetchUserTracks()
	}

	render() {
		return (
			<div>
				<UserCard />
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
		fetchUserTracks: bindActionCreators(tracklistActions.fetchUserTracks, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(HomePage)


