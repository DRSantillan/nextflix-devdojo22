// Author: Dean Santillan @2022
// Email: dean@deansantillan.com

//
import Image from 'next/image';
import css from './Banner.module.scss';

//
const Banner = ({ title, subTitle, imgUrl }) => {
	const bannerImage = {
		backgroundImage: `url(${imgUrl})`,
		width: '100%',
		height: '100%',
		position: 'absolute',
		backgroundSize: 'cover',
		backgroundPosition: '50% 50%',
	};
	const handleOnPlay = () => {
		console.log('clicked banner button');
	};
	return (
		<div className={css.container}>
			<div className={css.leftWrapper}>
				<div className={css.left}>
					<div className={css.nseriesWrapper}>
						<p className={css.firstLetter}>N</p>
						<p className={css.series}>S E R I E S</p>
					</div>
					<h3 className={css.title}>{title}</h3>
					<h3 className={css.subTitle}>{subTitle}</h3>
					<div className={css.playBtnWrapper}>
						<button
							className={css.btnWithIcon}
							onClick={handleOnPlay}
						> <Image src='/static/play-arrow.svg' alt='Play Movie' width='32px' height='32px'/>
							<span className={css.playText}>Play</span>
						</button>
					</div>
				</div>
			</div>

			<div className={css.bannerImg} style={bannerImage}></div>
		</div>
	);
};

//
export default Banner;
