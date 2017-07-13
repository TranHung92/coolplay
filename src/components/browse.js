import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StickyContainer, Sticky } from 'react-sticky';

import * as tracklistActions from '../core/tracklists'
import Tracklist from './tracklist';
import Header from './header'


import { FEATURED_TRACKLIST_ID } from '../core/constants'


class Browse extends Component {
	componentWillMount() {
		this.props.fetchTracks(FEATURED_TRACKLIST_ID);
	}

	render() {
		return (
			<StickyContainer >
				<div>
					<Sticky>
						{
	            ({
	              style,

	              // the following are also available but unused in this example
	              isSticky,
	              wasSticky,
	              distanceFromTop,
	              distanceFromBottom,
	              calculatedHeight
	            }) => {
	              return (
	                <div className="header" style={style}>
	                	<div>
											<Header  />
	                	</div>
	                </div>
	              )
	            }
          	}
					</Sticky>
					<h3>This is browse</h3>
					<div>
						<div className="tracklist" style={{ zIndex: 0 }}>
							<Tracklist />
						</div>
					</div>
				</div>				
			</StickyContainer>

		)
	}
}



function mapDispatchToProps(dispatch) {
	return {
		fetchTracks: bindActionCreators(tracklistActions.fetchTracksFulfilled, dispatch),
	}
}

export default connect(null, mapDispatchToProps)(Browse)


