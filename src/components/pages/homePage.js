import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'

import * as tracklistActions from '../../core/tracklists'
import Tracklist from '../tracklist';
import UserCard from '../userCard'
import { getTracklistStatus, getTracksForCurrentTracklist } from '../../core/tracklists'

import { FEATURED_TRACKLIST_ID } from '../../core/constants'


class HomePage extends Component {
	componentDidMount() {
		this.props.fetchFeaturedTracks(FEATURED_TRACKLIST_ID);

	}
	componentDidUpdate() {
		//const data = { data: this.props.tracks.toJS() }
		//this.props.fetchTracks2(this.props.tracks)

	  if(this.scrolled === false){
	    window.scrollTo(0,0);
	    this.scrolled = true;
	  }
}

	componentWillMount() {

	}

	render() {
		const { isLoaded, tracks } = this.props
		console.log('tracks', tracks)
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



const mapStateToProps = createSelector(
	getTracklistStatus,
	getTracksForCurrentTracklist,
	(isLoaded, tracks) => ({isLoaded, tracks})
)

function mapDispatchToProps(dispatch) {
	return {
		fetchFeaturedTracks: bindActionCreators(tracklistActions.fetchFeaturedTracks, dispatch),
		fetchUserTracks: bindActionCreators(tracklistActions.fetchUserTracks, dispatch),
		loadFeaturedTracks: bindActionCreators(tracklistActions.loadFeaturedTracks, dispatch),
		fetchTracks2: bindActionCreators(tracklistActions.fetchTracks2, dispatch),
		fetchTracks: bindActionCreators(tracklistActions.fetchTracks, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


