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
		this.props.fetchFeaturedTracks(FEATURED_TRACKLIST_ID);
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
		fetchFeaturedTracks: bindActionCreators(tracklistActions.fetchFeaturedTracks, dispatch),
		fetchUserTracks: bindActionCreators(tracklistActions.fetchUserTracks, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(HomePage)


