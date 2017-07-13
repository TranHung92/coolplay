import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import { getTrackById } from '../core/tracks'
import { getTracksForCurrentTracklist } from '../core/tracklists'

function List({ tracks }) {
	const renderList = tracks.map(track => 
		<div key={track.id}>
			<li>{track.title}</li>
		</div>
	)
	return (
		<div>
			<ul>
				{renderList}
			</ul>
		</div>
	)
}

class Tracklist extends Component {
	render() {
		const { tracks, tracklists } = this.props
		
		let lists = tracklists.toJS()
		let ids = lists.featured
		return (
			<div>
				<ul>
					{ids ? <List tracks={tracks} /> : <h3>loading</h3>}	
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tracklists: state.get('tracklists'), 
		tracks: state.get('tracks')
	}
}

// const mapStateToProps = createSelector(
// 	getTracksForCurrentTracklist,
// 	(tracks) => ({ tracks })
// );

export default connect(mapStateToProps)(Tracklist)