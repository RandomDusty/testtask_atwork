import { useState } from 'react';
import styles from '../styles/singleUserCard.module.css';

const CardInput = ({ heading, info, validInputs, setValidInputs }) => {
	const [inputValue, setInputValue] = useState(info);

	const handleInputChange = e => {
		if (e.target.value.length === 0) {
			setValidInputs(validInputs - 1);
		} else if (e.target.value.length === 1 && inputValue.length === 0) {
			setValidInputs(validInputs + 1);
		}

		setInputValue(e.target.value);
	};

	return (
		<div className={styles.inputBlock}>
			<p className={styles.heading}>{heading}</p>
			<input
				className={styles.input}
				type='text'
				value={inputValue}
				style={{
					borderColor: `${
						inputValue.length === 0 ? 'red' : 'rgba(218, 218, 218, 1)'
					}`,
				}}
				placeholder='Заполните поле!'
				onChange={e => handleInputChange(e)}
			/>
		</div>
	);
};
export default CardInput;
