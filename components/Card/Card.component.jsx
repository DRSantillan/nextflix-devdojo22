// Author: Dean Santillan @2022
// Email: dean@deansantillan.com

//
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cls from 'classnames';

//
import css from './Card.module.scss';
import { errorImage } from '../../data/data';

//
const Card = ({ imgUrl = errorImage, size = 'medium', id }) => {
	// state management
	const [imageSrc, setImageSrc] = useState(imgUrl);
	// class name map for image size.
	const imageSizes = {
		small: css.smItem,
		medium: css.mdItem,
		large: css.lgItem,
	};

	// handle image errors
	const handleImageErrors = () => {
		setImageSrc(errorImage);
	};

	const scaleCard = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

	return (
		<div className={css.container}>
			<motion.div
				className={cls(css.imgMotionWrapper, imageSizes[size])}
				whileHover={{ ...scaleCard }}
			>
				<Image
					className={css.cardImg}
					src={imageSrc}
					alt='image'
					layout='fill'
					onError={handleImageErrors}
				/>
			</motion.div>
		</div>
	);
};

//
export default Card;
