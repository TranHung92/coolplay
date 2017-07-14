import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({user}) {
	function RenderCard({user}) {
		return (
			<div className="ui very padded vertical segment">
				<div className="ui container">
					<h2 className="ui header">
	  				<img src={user.avatarUrl} className="ui circular image" />
	  				{user.username}
					</h2>
					<div className="ui secondary pointing massive menu">
						<Link activeClassName="active" to={`/users/${user.id}/tracks`} className="item">
	  					Tracks
						</Link>
						<Link activeClassName="active" to={`/users/${user.id}/favorites`} className="item">
	  					Favorites
						</Link>
						<Link activeClassName="active" to='' className="item">
	  					Playlist
						</Link>
					</div>
				</div>
			</div>			
		)
	}
	return (
		<div>
			{ user ? <RenderCard user={user} /> : null }
		</div>
	)
}