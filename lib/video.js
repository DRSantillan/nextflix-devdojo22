import dynamic from 'next/dynamic';
import { youtubeVideos } from '../data/data';
import {
	YOUTUBE_API_URL,
	YOUTUBE_POPULAR_POST_FIX,
	YOUTUBE_SEARCH_POST_FIX_URL,
} from '../data/data';

export const getVideos = async (searchTerm = undefined) => {
	let queryUrlToExecute;
	if (searchTerm)
		queryUrlToExecute = `${YOUTUBE_API_URL}${YOUTUBE_SEARCH_POST_FIX_URL}${searchTerm}&key=${process.env.YOUTUBE_API_KEY}`;
	if (!searchTerm)
		queryUrlToExecute = `${YOUTUBE_API_URL}${YOUTUBE_POPULAR_POST_FIX}&key=${process.env.YOUTUBE_API_KEY}`;
	//

	//
	try {
		//
		const response = await fetch(queryUrlToExecute);
		const data = await response.json();
		// catch a youtube error
		if (data?.error) {
			console.error('Youtube API Error: ', data.error);
			return [];
		}
		console.log(data, searchTerm);
		//
		return data.items.map(video => {
			const id = video.id?.videoId || video.id;
			return {
				title: video.snippet.title,
				description: video.snippet.description,
				imgUrl: video.snippet.thumbnails.high.url,
				createdAt: video.snippet.publishedAt,
				id,
			};
		});
	} catch (error) {
		//
		console.log(error);
		return [];
	}
};
