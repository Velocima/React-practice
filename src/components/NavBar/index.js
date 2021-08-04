import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function index() {
	return (
		<nav>
			<NavLink exact to='/' activeClassName='selected'>
				Home
			</NavLink>
			<NavLink exact to='/kevin_penkin' activeClassName='selected'>
				Kevin Penkin
			</NavLink>
		</nav>
	);
}
