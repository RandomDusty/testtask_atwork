import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import styles from '../styles/userCards.module.css';

const UserCardsBlock = ({ users, headline, isArchive }) => {
	return (
		<div style={{ marginTop: '40px' }}>
			<h2 style={{ textAlign: 'left' }}>{headline}</h2>
			<hr />
			<div className={styles.userCards}>
				{users.map((user, id) => {
					return <UserCard user={user} key={id} isArchive={isArchive} />;
				})}
			</div>
		</div>
	);
};
export default UserCardsBlock;
