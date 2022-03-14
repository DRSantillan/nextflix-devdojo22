// Author: Dean Santillan @2022
// Email: dean@deansantillan.com

//
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

//
import css from './Card.module.scss';
import { errorImage } from '../../data/data';

//
const Card = ({ imgUrl = errorImage, size = 'medium' }) => {
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
        setImageSrc(errorImage)
    }

	return (
		<div className={css.container}>
			<motion.div
				className={imageSizes[size]}
				whileHover={{ scale: 1.2 }}
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
