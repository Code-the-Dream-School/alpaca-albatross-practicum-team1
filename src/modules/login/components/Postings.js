import React from 'react';
import { Post } from './Post';

// data will change from api when its ready
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
	return data.map((data, idx) => {
		return <Post key={idx} title={data.title} description={data.description} />;
	});
};
