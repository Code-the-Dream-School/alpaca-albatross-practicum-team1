import React from 'react';
import { Post } from './Post';

import styles from '../styles/Postings.module.css';

// TODO:  data will change from api when its ready
const data = [
	{
		title: 'Baby Sitter',
		description: 'HELP NEEDED ASAP!',
	},
	{
		title: 'Actor / Actress',
		description: 'HELP NEEDED ASAP',
	},
	{
		title: 'Delivery Driver',
		description: 'HELP NEEDED ASAP',
	},
	{
		title: 'Warehouse Worker',
		description: 'HELP NEEDED ASAP',
	},
];

export const Postings = () => {
	return (
		<div className={styles.posting}>
			{data.map((data, index) => {
				return (
					<Post key={index} title={data.title} description={data.description} />
				);
			})}
		</div>
	);
};
