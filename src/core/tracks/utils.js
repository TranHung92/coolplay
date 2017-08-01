import {
  CLIENT_ID_PARAM,
  IMAGE_DEFAULT_SIZE,
  IMAGE_XLARGE_SIZE,
} from '../../constants/api';


const EN_DASH = String.fromCharCode(8211);


export function formatTrackTitle(title) {
  if (!title) return '';
  return title.replace(/-/g, EN_DASH);
}

export function streamUrl(url) {
  return `${url}?${CLIENT_ID_PARAM}`;
}

export function trackImageUrl(trackData, size = IMAGE_XLARGE_SIZE) {
  let url = trackData.artwork_url || trackData.user.avatar_url;
  return url.replace(IMAGE_DEFAULT_SIZE, size);
}
