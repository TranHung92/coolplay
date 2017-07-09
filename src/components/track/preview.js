import React from 'react';
import Permalink from '../permalink';

function TrackPreview({
  activity,
  isPlaying,
  activeTrackId,
  userEntities,
  onActivateTrack,
  onAddTrackToPlaylist
}) {
  const { avatar_url, username } = userEntities[activity.user];
  const { playback_count, favoritings_count, comment_count, permalink_url } = activity;

  return (
    <div className="item">
      <div className="item-content">
        <Permalink link={permalink_url} text={username + ' - ' + activity.title} />
      </div>
    </div>
  );
}

export {
  TrackPreview
};
