import React, { Component } from 'react'
import _ from 'lodash'
import _map from '../services/map'
import Player from 'react-soundcloud-player'

function SpecificList({ ids, kind, entities, onPlay }) {
	let favoriteList = _.values(entities)
	const renderTracks = favoriteList.map(track => 
		<div key={track.id}>
			<li>{track.title}</li>
			<button type='button' onClick={() => onPlay(track)}>play</button>
		</div>
	)

	if (kind === 'TRACK') {
		return (
			<div>
				<ul>
					{renderTracks}
				</ul>
			</div>
		)
	}
}



class List extends Component {
	render() {
		const {
			ids,
			title,
			kind,
			requestInProcess,
			entities,
			nextHref,
			onFetchMore,
			activeTrack,
			onPlay
		} = this.props;
	return (
		<div>
			<SpecificList
				ids={ids}
				kind={kind}
				entities={entities}
				activeTrack={activeTrack}
				onPlay={onPlay}
			/>
			{
				activeTrack ?
					<Player audio_id={activeTrack.id.toString()} title={activeTrack.title} /> :
					null
			}
		</div>
	)
	}
}

export default List
export { SpecificList }