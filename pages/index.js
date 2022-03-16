import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner/Banner.component';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/Card/Card.component';
import CardSection from '../components/CardSection/CardSection.component';
import { getVideos } from '../lib/video';
export const getServerSideProps = async () => {
	const disneyVideos = await getVideos('disney trailers');
	const travelVideos = await getVideos('travel');
	const productivityVideos = await getVideos('productivity');
	const popularVideos = await getVideos();

	return {
		props: {
			disneyVideos,
			travelVideos,
			productivityVideos,
			popularVideos,
		},
	};
};

export default function Home({
	disneyVideos,
	travelVideos,
	productivityVideos,
	popularVideos,
}) {
	//const disneyVideos = getVideos();

	return (
		<div className={styles.container}>
			<Head>
				<title>NextFlix</title>
				<meta
					name='description'
					content='A New Way to Stream your favorite shows online!'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.main}>
				<NavBar userName='gaijincoach@hotmail.com' />
				<Banner
					title='Clifford the Red Dog'
					subTitle='A very cute dog'
					imgUrl='/static/clifford.webp'
				/>
				<div className={styles.sectionWrapper}>
					<CardSection
						title='Disney'
						size='large'
						videos={disneyVideos}
					/>
					<CardSection
						title='Travel'
						size='small'
						videos={travelVideos}
					/>
					<CardSection
						title='Productivity'
						size='medium'
						videos={productivityVideos}
					/>
					<CardSection
						title='Popular'
						size='medium'
						videos={popularVideos}
					/>
				</div>
			</div>
		</div>
	);
}
