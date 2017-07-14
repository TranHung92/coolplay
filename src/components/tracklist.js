import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';
//import { Link } from 'react-router-dom';

//import { getTracks } from '../core/tracks'
//import { getTrackById } from '../core/tracks'
import { getTracksForCurrentTracklist, getCurrentTracklist } from '../core/tracklists'
import TrackCard from './trackCard'
import { playerActions } from '../core/player'


function List({ tracks, playTrack, tracklistId }) {
	const renderList = tracks.map(track => 
		<div key={track.id}>
			<div className="three wide column">
				<TrackCard track={track} play={playTrack.bind(null, track, tracklistId)} />
			</div>
		</div>
	)
	return (
		<div className="ui centered grid">
			{renderList}
		</div>
	)
}

class Tracklist extends Component {
	render() {
		const { tracklist, tracks, playTrack } = this.props
		return (
			<div>
				<h3>{tracklist.id} tracks</h3>
				{tracks ? <List tracks={tracks} playTrack={playTrack} tracklistId={tracklist.id} /> : <h3>loading</h3>}	
			</div>
		)
	}
}


const mapStateToProps = createSelector(
	getCurrentTracklist,
	getTracksForCurrentTracklist,
	(tracklist, tracks) => ({ tracklist, tracks })
);

const mapDispatchToProps = {
	playTrack: playerActions.playSelectedTrack
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracklist)