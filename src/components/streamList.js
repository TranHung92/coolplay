import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import * as toggleTypes from '../constants/toggleTypes';
import * as requestTypes from '../constants/requestTypes';
import * as paginateLinkTypes from '../constants/paginateLinkTypes';
import List from '../components/list';
import { fetchStream } from '../actions/user'

class StreamList extends Component {
	componentWillMount() {
    
  }

	render() {
		const { onFetchStream } = this.props
		return (
			<div>
				<div>STREAM LIST</div>
				<button onClick={onFetchStream}>Fetch songs</button>
			</div>
		)
	}
}


function mapDispatchToProps(dispatch) {
	return {
		onFetchStream: bindActionCreators(actions.fetchStream, dispatch),
		onPlay: bindActionCreators(actions.playTrack, dispatch)
	}
}
export default connect(null, mapDispatchToProps)(StreamList);
export { StreamList }