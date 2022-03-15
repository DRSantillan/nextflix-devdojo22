import dynamic from 'next/dynamic';
import { youtubeVideos } from '../data/data';
import { YOUTUBE_API_URL } from '../data/data';

export const getVideos = async searchTerm => {
	//
	const YOUTUBE_SEARCH_QUERY_URL = `${YOUTUBE_API_URL}${searchTerm}&key=${process.env.YOUTUBE_API_KEY}`;
	//
	try {
		//
		const response = await fetch(YOUTUBE_SEARCH_QUERY_URL);
		const data = await response.json();
		console.log(data, searchTerm)
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
		
	}
};
