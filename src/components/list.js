import React from 'react'
import _ from 'lodash'
import { TrackPreviewContainer } from '../components/track';
import _map from '../services/map'
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


function SpecificList({ ids, kind, entities }) {
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
			<button>play</button>
		</div>
	)
	
	let tracksID = _.values(ids)


	if (kind === 'TRACK') {
		return (
			<div>
				<ul>
					
				</ul>
			</div>
		)
	}
}

function List({
	ids,
	isExpanded,
	title,
	kind,
	requestInProcess,
	entities,
	onToggleMore,
	nextHref,
	onFetchMore
}) {
	return (
		<div>
			<SpecificList
				ids={ids}
				kind={kind}
				entities={entities}
			/>
		</div>
	)
}

export default List
export { SpecificList }