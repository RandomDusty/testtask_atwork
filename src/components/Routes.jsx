import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import Home from '../pages/Home';
import Card from '../pages/Card';

const AppRoutes = () => (
	<Routes>
		<Route path={ROUTES.HOME} element={<Home />} />
		<Route path={ROUTES.CARD} element={<Card />} />
	</Routes>
);

export default AppRoutes;
