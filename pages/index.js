import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner/Banner.component';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/Card/Card.component';
import CardSection from '../components/CardSection/CardSection.component';
import { videos } from '../data/data';

export default function Home() {
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

			<NavBar userName='gaijincoach@hotmail.com' />
			<Banner
				title='Clifford the Red Dog'
				subTitle='A very cute dog'
				imgUrl='/static/clifford.webp'
			/>
			<div className={styles.sectionWrapper}>
				<CardSection title='Disney' size='large' videos={videos} />
				<CardSection title='Watch Again' size='small' videos={videos} />
				<CardSection
					title='Productivity'
					size='medium'
					videos={videos}
				/>
			</div>
		</div>
	);
}
