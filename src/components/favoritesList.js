import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import * as toggleTypes from '../constants/toggleTypes';
import * as requestTypes from '../constants/requestTypes';
import * as paginateLinkTypes from '../constants/paginateLinkTypes';
import List from '../components/list';

class FavoritesList extends Component {
	componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) { return; }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
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
			<List 
				title='Favorites'
				ids={favorites}
				entities={trackEntities}
				nextHref={nextHref}
				requestInProcess={requestInProcess}
				currentUser={currentUser}
				// onFetchMore={() => onFetchFavorites(currentUser, nextHref)}
				kind="TRACK"
				tracks={tracks}
				activeTrack={activeTrack}
				onPlay={onPlay}
			/>
		)
	}
}

function mapStateToProps(state) {
	const nextHref = state.paginate[paginateLinkTypes.FAVORITES];
	const requestInProcess = state.request[requestTypes.FAVORITES];
	const { tracks, activeTrack } = state.track;
	return {
		currentUser: state.auth.user,
		trackEntities: state.entities.tracks,
		favorites: state.user.favorites,
		nextHref,
		requestInProcess,
		tracks,
		activeTrack
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onFetchFavorites: bindActionCreators(actions.fetchFavorites, dispatch),
		onPlay: bindActionCreators(actions.playTrack, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
export { FavoritesList }