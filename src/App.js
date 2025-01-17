import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotFound, KevinPenkin } from './pages'; // targets index.js automatically
import './style.css';

const App = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/kevin_penkin'>
				<KevinPenkin />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default App;
