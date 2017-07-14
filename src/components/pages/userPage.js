import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getAuthedUser, getCurrentUser, userActions } from '../../core/users'
import Tracklist from '../tracklist'
import { fetchFavorites, fetchUserTracks } from '../../core/tracklists'
import UserCard from '../userCard'

class UserPage extends Component {
	componentDidUpdate() {
  if(this.scrolled === false){
    window.scrollTo(0,0);
    this.scrolled = true;
  }
}

	componentWillMount() {
		this.loadCurrentUser()
		this.props.fetchUserTracks(this.props.match.params.id, this.props.match.params.section)
		console.log(this.props)
	}

	componentWillUpdate(nextProps) {
		if (nextProps.match.params !== this.props.match.params) {
			this.loadCurrentUser(nextProps.match.params)
			this.props.fetchUserTracks(this.props.match.params.id, this.props.match.params.section)
		}
	}
	loadCurrentUser(params) {
		params = params || this.props.match.params
		this.props.loadUser(params.id)
		if (params.section === 'favorites') {
			this.props.loadUserFavorites(params.id)
		} else {
			this.props.loadUserTracks(params.id)
		}
	}

	render() {
		const { currentUser, authedUser } = this.props
		if (!currentUser) return null;
		return (
			<div>
				<UserCard user={currentUser}/>
				<div className="ui container">
					<Tracklist />
				</div>
			</div>
			
		)
	}
}

const mapStateToProps = createSelector(
	getAuthedUser,
	getCurrentUser,
	(authedUser, currentUser) => ({authedUser, currentUser})
)

const mapDispatchToProps = {
	loadUser: userActions.loadUser,
	loadUserFavorites: userActions.loadUserFavorites,
	loadUserTracks: userActions.loadUserTracks,
	fetchFavorites,
	fetchUserTracks
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)