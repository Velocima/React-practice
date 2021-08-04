import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default () => {
	const [book, setBook] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get('https://openlibrary.org/works/OL45883W.json');
				console.log(data);
				setBook(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);
	return <div className='book-description'>{book ? book.description : ''}</div>;
};
