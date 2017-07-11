import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
	likePage,
	streamPage,
	playlistsPage 
} from '../constants/pathnames'
import * as actions from '../actions';


class UserBar extends Component {
	render() {
		const { onFetchStream, onLogin } = this.props
		return (
			<div>
				<ul>
					<li>
						<Link onClick={onFetchStream} to={streamPage}>Stream</Link>
					</li>
					<li>
						<Link onClick={onLogin} to={likePage}>Likes</Link>
					</li>
					<li>
						<Link to={playlistsPage}>Playlists</Link>
					</li>
				</ul>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {		
		onLogin: bindActionCreators(actions.login, dispatch),
		onFetchStream: bindActionCreators(actions.fetchStream, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(UserBar)