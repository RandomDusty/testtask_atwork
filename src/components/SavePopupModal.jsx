import { useState } from 'react';
import saveImage from '../assets/StatusSaveIcon.png';
import closeCrossImage from '../assets/Cross.png';
import styles from '../styles/savePopup.module.css';

const SavePopupModal = ({ openModal, setOpenModal }) => {
	return (
		<div
			className={styles.modal}
			style={{ display: `${openModal ? 'flex' : 'none'}` }}
		>
			<div className={styles.modalContent}>
				<img
					onClick={() => {
						setOpenModal(false);
					}}
					src={closeCrossImage}
					className={styles.closeButton}
				/>
				<img src={saveImage} />
				<p>Изменения сохранены!</p>
			</div>
		</div>
	);
};
export default SavePopupModal;
