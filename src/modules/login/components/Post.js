import styles from '../styles/Post.module.css';

export const Post = ({ title, description }) => {
	return (
		<div className={styles.postContainer}>
			<div className={styles.postArea}>
				<div className={styles.post}>
					{/* <img src={PostItImg} alt='' /> */}
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};
