import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import List from '../components/list';

class Browse extends Component {
	componentDidMount() {
		this.props.fetchTracks();
	}

	render() {
		const {
			currentUser,
			favorites,
			trackEntities,
			nextHref,
			requestInProcess,
			onFetchFavorites,
			tracks,
			activeTrack,
			onPlay
		} = this.props 
		return (
			<div className='browse'>
				<h3>This is browse</h3>
				<List 
					title='Favorites'
					ids={favorites}
					entities={trackEntities}
					nextHref={nextHref}
					requestInProcess={requestInProcess}
					currentUser={currentUser}
					kind="TRACK"
					tracks={tracks}
					activeTrack={activeTrack}
					onPlay={onPlay}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { tracks, activeTrack } = state.track;
	return {
		currentUser: state.auth.user,
		trackEntities: state.entities.tracks,
		favorites: state.user.favorites,
		tracks,
		activeTrack
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchTracks: bindActionCreators(actions.fetchTracksFulfilled, dispatch),
		onFetchFavorites: bindActionCreators(actions.fetchFavorites, dispatch),
		onPlay: bindActionCreators(actions.playTrack, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)


