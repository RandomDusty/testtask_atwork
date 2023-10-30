import { useState, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './features/users/usersListSlice';
import UserCardsBlock from './components/UserCardsBlock';
import Home from './pages/Home';
import AppRoutes from './components/Routes';
import Header from './components/Header';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div className='bodyApp'>
			<Header />
			<div className='app'>
				<AppRoutes />
			</div>
		</div>
	);
}

export default App;
