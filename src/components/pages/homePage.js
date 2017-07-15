import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'

import * as tracklistActions from '../../core/tracklists'
import Tracklist from '../tracklist';
import UserCard from '../userCard'
import { getTracklistStatus, getTracksForCurrentTracklist, getCurrentTracklist } from '../../core/tracklists'
import Spinner from '../spinner'

import { FEATURED_TRACKLIST_ID } from '../../core/constants'


class HomePage extends Component {
	componentDidMount() {
		if (this.props.isLoaded) {
			if (this.props.currentTracklist.id === FEATURED_TRACKLIST_ID) {
				this.props.reloadPlaylist(FEATURED_TRACKLIST_ID)
			} else {
				this.props.fetchFeaturedTracks(FEATURED_TRACKLIST_ID);
			}
		} else {
			this.props.fetchFeaturedTracks(FEATURED_TRACKLIST_ID);
		}
		//this.props.fetchFeaturedTracks(FEATURED_TRACKLIST_ID);
	}
	componentDidUpdate() {
	  if (this.scrolled === false){
	    window.scrollTo(0,0);
	    this.scrolled = true;
	  }
	}

	render() {
		const { isLoaded, currentTracklist } = this.props
		return (
			<div>
				<UserCard />
				<div className="ui container">
					<div className="tracklist">
						{ currentTracklist.id === FEATURED_TRACKLIST_ID ? <Tracklist /> : <Spinner /> }
					</div>
				</div>
			</div>	
		)
	}
}



const mapStateToProps = createSelector(
	getTracklistStatus,
	getCurrentTracklist,
	(isLoaded, currentTracklist) => ({isLoaded, currentTracklist})
)

function mapDispatchToProps(dispatch) {
	return {
		fetchFeaturedTracks: bindActionCreators(tracklistActions.fetchFeaturedTracks, dispatch),
		reloadPlaylist: bindActionCreators(tracklistActions.reloadPlaylist, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


