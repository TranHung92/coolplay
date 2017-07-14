export function tracklistIdForUserFavorites(userId) {
  return `users/${userId}/favorites`;
}

export function tracklistIdForUserTracks(userId) {
  return `users/${userId}/tracks`;
}
