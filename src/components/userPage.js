import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getAuthedUser, userActions } from '../core/users'
import Tracklist from './tracklist'
import { fetchLikes } from '../core/tracklists'

class UserPage extends Component {
	componentWillMount() {
		console.log('hello', this.props)
		this.loadCurrentUser()
		this.props.fetchLikes(`users/${this.props.match.params.id}/${this.props.match.params.section}` , this.props.match.params.id)
	}

	loadCurrentUser(params) {
		params = params || this.props.match.params
		this.props.loadUser(params.id)
		if (params.section === 'likes') {
			this.props.loadUserLikes(params.id)
		} else {
			this.props.loadUserTracks(params.id)
		}
	}

	render() {
		const { user } = this.props
		console.log('user',user)
		return (
			<div>
				<h3>UserPage</h3>
				<Tracklist />
			</div>
		)
	}
}

const mapStateToProps = createSelector(
	getAuthedUser,
	user => ({user})
)

const mapDispatchToProps = {
	loadUser: userActions.loadUser,
	loadUserLikes: userActions.loadUserLikes,
	loadUserTracks: userActions.loadUserTracks,
	fetchLikes
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)