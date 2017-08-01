import {
  IMAGE_DEFAULT_SIZE,
  IMAGE_XLARGE_SIZE,
} from '../../constants/api';

export function tracklistIdForUserFavorites(userId) {
  return `users/${userId}/favorites`;
}

export function tracklistIdForUserTracks(userId) {
  return `users/${userId}/tracks`;
}

export function trackUserUrl(userData, size = IMAGE_XLARGE_SIZE) {
  let url = userData.avatar_url;
  return url.replace(IMAGE_DEFAULT_SIZE, size);
}