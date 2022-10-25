import React, { useEffect } from 'react';
import './Form.css';

function Form(props) {
	const [nama, setNama] = React.useState('');
	const [kelompok, setKelompok] = React.useState('');
	const [namaIsValid, setNamaIsValid] = React.useState(null);
	const [kelompokIsValid, setKelompokIsValid] = React.useState(null);
	const [formIsValid, setFormIsValid] = React.useState(false);

	const submitHandler = (event) => {
		event.preventDefault();

		if (formIsValid) {
			console.log({ nama, kelompok });
			props.onAddPraktikan({ nama: nama, kelompok: kelompok });

			setNama('');
			setKelompok('');
		} else {
			alert('Form tidak valid');
		}
	};

	const changeNamaHandler = (event) => {
		setNamaIsValid(event.target.value.trim().length > 0);
		setNama(event.target.value);
	};

	const changeKelompokHandler = (event) => {
		setKelompokIsValid(event.target.value.trim().length > 0);
		setKelompok(event.target.value);
	};

	useEffect(() => {
		setFormIsValid(namaIsValid && kelompokIsValid);
		console.log(`${Form.name}: ${formIsValid}`);
	}, [namaIsValid, kelompokIsValid]);

	return (
		<>
			<form onSubmit={submitHandler}>
				<label htmlFor="nama">Nama</label>
				<input
					className={namaIsValid === false ? 'invalid' : ''}
					autoComplete="off"
					type="text"
					id="nama"
					nama="nama"
					value={nama}
					onChange={changeNamaHandler}
					onBlur={changeNamaHandler}
				/>
				<label htmlFor="kelompok">Kelompok</label>
				<input
					className={kelompokIsValid === false ? 'invalid' : ''}
					autoComplete="off"
					type="number"
					id="kelompok"
					nama="kelompok"
					value={kelompok}
					onChange={changeKelompokHandler}
					onBlur={changeKelompokHandler}
				/>

				<button type="submit">Buat Kartu Praktikan</button>
			</form>
		</>
	);
}

export default Form;
