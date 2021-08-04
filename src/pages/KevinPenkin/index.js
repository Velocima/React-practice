import React, { useState } from 'react';
import { Album } from '../../layout';
import { Greeting, BookInfo } from '../../components';
import './style.css';
import { NavBar } from '../../components';

export default () => {
	const [titles, setTitles] = useState([
		{
			title: 'Made in Abyss: Dawn of the deep soul',
			trackList: ['Echoes', 'Faith'],
		},
		{
			title: "Made in Abyss: Journey's Dawn",
			trackList: ['Made in Abyss', 'Days in the Sun'],
		},
		{
			title: 'Rising of the shield hero',
			trackList: ['Melty', 'Preparations'],
		},
	]);

	const renderTitleCards = () =>
		titles.map(({ title, trackList }, index) => {
			return <Album key={index} title={title} trackList={trackList} />;
		});

	return (
		<main>
			<h1>Kevin Penkin</h1>
			<NavBar />
			{renderTitleCards()}
			<BookInfo />
			<Greeting />
		</main>
	);
};
