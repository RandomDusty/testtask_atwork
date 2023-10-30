import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/users/usersListSlice';
import UserCardsBlock from '../components/UserCardsBlock';

const Home = () => {
	const userList = useSelector(({ usersList }) => usersList);

	return (
		<>
			{!userList.isLoading ? (
				<div>
					{userList.activeUsers.length ? (
						<UserCardsBlock
							users={userList.activeUsers}
							headline='Активные'
							isArchive={false}
						/>
					) : (
						<></>
					)}

					{userList.archiveUsers.length ? (
						<UserCardsBlock
							users={userList.archiveUsers}
							headline='Архив'
							isArchive={true}
						/>
					) : (
						<></>
					)}
				</div>
			) : (
				<>
					<p style={{ marginTop: '30px' }}>Идет загрузка данных!</p>
				</>
			)}
		</>
	);
};
export default Home;
