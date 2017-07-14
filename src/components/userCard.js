import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserCard({user}) {
	function RenderUserCard({user}) {
		return (
			<div className="ui very padded vertical segment">
				<div className="ui container">
					<h1 className="ui header">
	  				<img src={user.avatarUrl} alt="" className="ui circular image" />
	  				{user.username}
					</h1>
					<div className="ui secondary pointing massive menu">
						<NavLink activeClassName="active" to={`/users/${user.id}/tracks`} className="item">
	  					Tracks
						</NavLink>
						<NavLink activeClassName="active" to={`/users/${user.id}/favorites`} className="item">
	  					Favorites
						</NavLink>
					</div>
				</div>
			</div>			
		)
	}
	function RenderHomeCard() {
		return (
			<div className="ui very padded vertical segment">
				<div className="ui container">
					<h3>Featured Tracks</h3>
				</div>
			</div>
		)
	}

	return (
		<div>
			{ user ? <RenderUserCard user={user} /> : <RenderHomeCard /> }
		</div>
	)
}