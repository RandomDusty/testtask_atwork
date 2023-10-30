import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import CardInput from '../components/CardInput';
import styles from '../styles/singleUserCard.module.css';
import arrow from '../assets/Backarrow.png';
import { Link } from 'react-router-dom';
import cardImage from '../assets/userCardImg.png';

import SavePopupModal from '../components/SavePopupModal';
import { useState } from 'react';

const Card = () => {
	const userList = useSelector(({ usersList }) => usersList);
	const location = useLocation();
	const [openModal, setOpenModal] = useState(false);
	const [validInputs, setValidInputs] = useState(6);

	const user = location.state.user;

	return (
		<div>
			<div>
				<Link to='/' className={styles.backButton}>
					<img src={arrow} />
					<span>Назад</span>
				</Link>
			</div>
			<div className={styles.dataBlocks}>
				<div className={styles.settingsBlock}>
					<div
						className={styles.userCardImage}
						style={{
							backgroundImage: `url(${cardImage})`,
						}}
					/>
					<div className={styles.categories}>
						<div>
							<p className={styles.activeCategory}>Данные профиля</p>
							<hr />
						</div>
						<div>
							<p>Рабочее пространство</p>
							<hr />
						</div>
						<div>
							<p>Приватность</p>
							<hr />
						</div>
						<div>
							<p>Безопасность</p>
							<hr />
						</div>
					</div>
				</div>
				{!userList.isLoading && user !== undefined ? (
					<div className={styles.cardInputsBlock}>
						<h2 className={styles.title}>Данные профиля</h2>
						<hr />
						<CardInput
							heading={'Имя'}
							info={user.name}
							validInputs={validInputs}
							setValidInputs={setValidInputs}
						/>
						<CardInput
							heading={'Никнейм'}
							info={user.username}
							validInputs={validInputs}
							setValidInputs={setValidInputs}
						/>
						<CardInput
							heading={'Почта'}
							info={user.email}
							validInputs={validInputs}
							setValidInputs={setValidInputs}
						/>
						<CardInput
							heading={'Город'}
							info={user.address.city}
							validInputs={validInputs}
							setValidInputs={setValidInputs}
						/>
						<CardInput
							heading={'Телефон'}
							info={user.phone}
							validInputs={validInputs}
							setValidInputs={setValidInputs}
						/>
						<CardInput
							heading={'Название компании'}
							info={user.company.name}
							validInputs={validInputs}
							setValidInputs={setValidInputs}
						/>
						<button
							onClick={() => {
								if (validInputs === 6) {
									setOpenModal(true);
									setTimeout(() => {
										setOpenModal(false);
									}, 4000);
								}
							}}
						>
							Сохранить
						</button>
						<SavePopupModal openModal={openModal} setOpenModal={setOpenModal} />
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Card;
