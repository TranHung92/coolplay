import React, { Component } from 'react'
import _ from 'lodash'
import { TrackPreviewContainer } from '../components/track';
import _map from '../services/map'
import Player from 'react-soundcloud-player'


// import { UserPreviewContainer } from '../components/User';

function SpecificItemTrack({ entities, trackId }) {
  return (
    <li>
      <TrackPreviewContainer activity={entities[trackId]} />
    </li>
  );
}

// function SpecificItemUser({ entities, userId }) {
//   return (
//     <li>
//       <UserPreviewContainer user={entities[userId]} />
//     </li>
//   );
// }


function SpecificList({ ids, kind, entities, onPlay }) {
	// if (kind === 'USER') {
	// 	return (
	// 		<div>
	// 			<ul>
	// 				{_map((id, key) => {
	// 					const userProps = { userId: id, entities };
	// 					return <SpecificItemUser key={key} { ...userProps } />
	// 				}, ids)}
	// 			</ul>
	// 		</div>
	// 	)
	// }
	
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
	constructor() {
		super()
		this.state = { activeTrack: null }
	}
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