import logo from '../assets/logo-sign.png';
import notification from '../assets/Notification.png';
import favorite from '../assets/Favorite.png';
import avatar from '../assets/avatar.png';
import styles from '../styles/header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<img src={logo} />
					<p>
						at-<span className={styles.logoSecondWord}>work</span>
					</p>
				</div>
				<div className={styles.menu}>
					<img src={favorite} />
					<img src={notification} />
					<img src={avatar} width='20' height='20' />
					<p>Ivan1234</p>
				</div>
			</div>
		</div>
	);
};
export default Header;
