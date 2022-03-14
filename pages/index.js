import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner/Banner.component';

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

			<h1>NextFlix</h1>
			<Banner
				title='Clifford the Red Dog'
				subTitle='A very cute dog'
				imgUrl='/static/clifford.webp'
			/>
		</div>
	);
}
