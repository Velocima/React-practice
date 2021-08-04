import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default () => {
	const [book, setBook] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get('https://openlibrary.org/works/OL45883W.json');
				setBook(data);
				setError(null);
			} catch (err) {
				setError(err.message);
			}
		};
		fetchData();
	}, []);
	return (
		<div className='book-description' role='article'>
			{error ? error : ''}
			{book ? book.description : 'Loading...'}
		</div>
	);
};
