//=====================================
//  API
//-------------------------------------
export const API_BASE_URL = 'https://api.soundcloud.com';
export const API_TRACKS_URL = `${API_BASE_URL}/tracks`;
export const API_USERS_URL = `${API_BASE_URL}/users`;

export const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID || 'a281614d7f34dc30b665dfcaa3ed7505';
export const CLIENT_ID_PARAM = `client_id=${CLIENT_ID}`;

//=====================================
//  IMAGES
//-------------------------------------
export const IMAGE_DEFAULT_SIZE = 'large.jpg';
export const IMAGE_XLARGE_SIZE = 't500x500.jpg';


//=====================================
//  TRACKLISTS
//-------------------------------------
export const FEATURED_TRACKLIST_ID = 'featured';
export const FEATURED_TRACKLIST_USER_ID = 185676792;

export const SESSION_TRACKLIST_ID = 'session';

export const TRACKS_PER_PAGE = 12;

export const PLAYER_INITIAL_VOLUME = 10;
export const PLAYER_MAX_VOLUME = 100;
export const PLAYER_VOLUME_INCREMENT = 5;