import './style.css';
import React, { useState } from 'react';

export default () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState('friend');

	const handleInputChange = (e) => {
		setName(e.target.value);
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		setUser(name);
		setName('');
	};

	return (
		<div className='greeting' role='presentation'>
			<p>Hi, {user}</p>
			<form onSubmit={handleSumbit}>
				<label htmlFor='name'>Your Name:</label>
				<input type='text' id='name' name='name' value={name} onChange={handleInputChange} />
				<input type='submit' />
			</form>
		</div>
	);
};
