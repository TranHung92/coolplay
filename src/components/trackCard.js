import React from 'react'
import { Link } from 'react-router-dom';

import { userUrl } from '../services/api'

const TrackCard = ({track, play}) => (
  <div className="four wide column">
    <div className="ui centered card">
      <div className="image">
        <img src={track.artworkUrl} alt=""/>
      </div>
      <div className="content">
        <div className="header">
          <Link to={userUrl(track.userId, 'tracks')}>{track.username}</Link>
        </div>
        <div className="description">
          {track.title}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
        </span>
        <button 
          className="ui basic icon button"
          onClick={play}>
          <i className="play icon"></i>
        </button>
      </div>
    </div>    
  </div>

)

export default TrackCard