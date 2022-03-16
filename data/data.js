//
import defaultImage from '../public/static/default.avif';
export const errorImage = defaultImage;

//
export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/`;
export const YOUTUBE_POPULAR_POST_FIX =
	'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=25';
export const YOUTUBE_SEARCH_POST_FIX_URL =
	'search?part=snippet&maxResults=25&q=';
