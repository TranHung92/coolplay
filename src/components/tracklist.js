import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import { getTrackById } from '../core/tracks'
import { getTracksForCurrentTracklist, getCurrentTracklist, getCurrentTrackIds } from '../core/tracklists'
import { getTracks } from '../core/tracks'

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
		const { tracks, ids } = this.props
		if (ids) console.log('hello', ids)
		// let lists = tracklists.toJS()
		// let ids = lists.featured
		return (
			<div>
				<h3>featured tracks</h3>
				<ul>
					{ids ? <List tracks={ids} /> : <h3>loading</h3>}	
				</ul>
			</div>
		)
	}
}

// function mapStateToProps(state) {
// 	return {
// 		tracklists: state.get('tracklists'), 
// 		tracks: state.get('tracks')
// 	}
// }

const mapStateToProps = createSelector(
	getTracksForCurrentTracklist,
	getTracks,
	(ids, tracks) => ({ ids, tracks })
);

export default connect(mapStateToProps)(Tracklist)