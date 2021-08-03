import React from 'react';
import { Track } from '../../components';

export default ({ title, trackList }) => {
	return (
		<>
			<h2>{title}</h2>
			<ul>
				{trackList.map((track, index) => (
					<Track key={index} title={track} />
				))}
			</ul>
		</>
	);
};
