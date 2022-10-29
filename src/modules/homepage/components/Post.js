import React from 'react';
import styles from '../styles/Post.module.css';

export const Post = ({ title, description }) => {
	return (
		<div className={styles.postContainer}>
			<div className={styles.post}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
