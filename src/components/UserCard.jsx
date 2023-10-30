import React from 'react';

import styles from '../styles/userCards.module.css';
import cardImage from '../assets/userCardImg.png';
import Dropdown from './Dropdown';

const UserCard = ({ user, isArchive }) => {
	return (
		<div className={styles.userCard}>
			<div
				className={styles.userCardImage}
				style={{
					backgroundImage: `url(${cardImage})`,
					filter: `grayscale(${isArchive ? 1 : 0})`,
				}}
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					flexGrow: '4',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						width: '100%',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<p
							className={styles.name}
							style={{ color: `${isArchive ? '#595959' : '#22a0bc'}` }}
						>
							{user.name}
						</p>
						<Dropdown user={user} isArchive={isArchive} />
					</div>
					<p
						className={styles.company}
						style={{ color: `${isArchive ? '#9c9c9c' : '#595959'}` }}
					>
						{user.company.name}
					</p>
				</div>
				<p
					className={styles.city}
					style={{ color: `${isArchive ? '#dadada' : '#9c9c9c'}` }}
				>
					{user.address.city}
				</p>
			</div>
		</div>
	);
};
export default UserCard;
