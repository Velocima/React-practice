import './style.css';
import React, { useState } from 'react';

export default ({ title }) => {
	const [liked, setLiked] = useState(false);
	const handleLikeButtonClick = () => {
		setLiked((prevState) => !prevState);
	};

	const titleStyle = {
		backgroundColor: !liked ? '#f5f5f5' : '#8aff8a',
		color: !liked ? 'black' : 'white',
		fontWeight: !liked ? 'normal' : 'bold',
	};

	return (
		<li>
			<p role='heading' style={titleStyle}>
				{title}
			</p>
			<button onClick={handleLikeButtonClick}>{liked ? 'UNLIKE' : 'LIKE'}</button>
		</li>
	);
};
