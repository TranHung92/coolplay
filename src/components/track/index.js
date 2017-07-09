import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { TrackPreview } from './preview';


function mapStateToProps(state, props) {
  const { idx, activity } = props;

  return {
    idx,
    activity,
    typeReposts: state.user.typeReposts,
    typeTracks: state.user.typeTracks,
    userEntities: state.entities.users,
    isPlaying: state.player.isPlaying,
    activeTrackId: state.player.activeTrackId,
    activeSortType: state.sort.sortType,
    activeDurationFilterType: state.filter.durationFilterType,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onActivateTrack: bindActionCreators(actions.activateTrack, dispatch),
//     onAddTrackToPlaylist: bindActionCreators(actions.addTrackToPlaylist, dispatch),
//     onRemoveTrackFromPlaylist: bindActionCreators(actions.removeTrackFromPlaylist, dispatch),
//   };
// }

const TrackPreviewContainer = connect(mapStateToProps)(TrackPreview);

export {
  TrackPreviewContainer
};
