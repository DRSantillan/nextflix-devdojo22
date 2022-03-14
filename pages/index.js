import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner/Banner.component';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/Card/Card.component';

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
			<Card imgUrl='/static/clifford.d' size='large' />
			<Card imgUrl='/static/clifford.webp' size='medium' />
			<Card imgUrl='/static/clifford.webp' size='small' />
		</div>
	);
}
