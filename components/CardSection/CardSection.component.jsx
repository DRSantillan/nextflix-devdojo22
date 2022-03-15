// Author: Dean Santillan @2022
// Email: dean@deansantillan.com

//
import { useState } from 'react'
import Card from '../Card/Card.component'

//
import css from './CardSection.module.scss'

// 
const CardSection = ({title, size, videos = []}) => {

    const videosToDisplay = videos.map((video, index) => (
		<Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
	));
    return (
		<section className={css.container}>
			<h2 className={css.title}>{title}</h2>
			<div className={css.cardWrapper}>
            {videosToDisplay}
			</div>
		</section>
	);
}

//
export default CardSection