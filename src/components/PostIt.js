import styles from '../components/PostIt.module.css';
import PostItImg from '../images/postItImg.jpg';

const PostIt = () => {
	return (
		<div className={styles.postContainter}>
            <div className={styles.postArea}>
                
				<div className={styles.post}>
					<img src={PostItImg} alt='' />
					<div>
						<h2>Post 1</h2>
						<p>Need help asap!</p>
					</div>
                </div>
                
                <div className={styles.post}>
					<img src={PostItImg} alt='' />
					<div>
						<h2>Post 2</h2>
						<p>Need help asap!</p>
					</div>
                </div>

                <div className={styles.post}>
					<img src={PostItImg} alt='' />
					<div>
						<h2>Post 3</h2>
						<p>Need help asap!</p>
					</div>
                </div>

			</div>
		</div>
	);
};

export default PostIt;
