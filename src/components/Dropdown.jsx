import { useState } from 'react';
import DotsIcon from '../assets/dots.svg';
import styles from '../styles/dropdown.module.css';
import { useDispatch } from 'react-redux';
import {
	addUserToActive,
	addUserToArchive,
	hideUser,
} from '../features/users/usersListSlice';
import { ROUTES } from '../utils/routes';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Dropdown = ({ user, isArchive }) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleMenuOne = () => {
		if (isArchive) {
			dispatch(addUserToActive(user));
		} else {
			navigate(`/card/${user.id}`, {
				state: { user: user },
			});
		}
		setOpen(false);
	};

	const handleMenuTwo = () => {
		dispatch(addUserToArchive(user));
		setOpen(false);
	};

	const handleMenuThree = () => {
		dispatch(hideUser(user));
		setOpen(false);
	};

	return (
		<div className={styles.dropdown}>
			<img onClick={handleOpen} src={open ? DotsIcon : DotsIcon} />
			{/* <svg
				onClick={handleOpen}
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12C0.9 12 0 12.9 0 14ZM0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8Z'
					fill='#161616'
				/>
			</svg> */}

			{open ? (
				<ul className={styles.menu}>
					{isArchive ? (
						<>
							<li className={styles.menuItem}>
								<p onClick={handleMenuOne}>Активировать</p>
							</li>
						</>
					) : (
						<>
							<li className={styles.menuItem}>
								<p onClick={handleMenuOne}>Редактировать</p>
							</li>

							<li className={styles.menuItem}>
								<p onClick={handleMenuTwo}>Архивировать</p>
							</li>
							<li className={styles.menuItem}>
								<p onClick={handleMenuThree}>Скрыть</p>
							</li>
						</>
					)}
				</ul>
			) : null}
		</div>
	);
};
export default Dropdown;
