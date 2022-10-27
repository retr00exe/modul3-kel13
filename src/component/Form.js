import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import ComboBox from './ComboBox';
import Toogle from './Toogle';

function Form({ onAddPraktikan }) {
	const [nama, setNama] = useState('');
	const [kelompok, setKelompok] = useState('');
	const [namaIsValid, setNamaIsValid] = useState(null);
	const [kelompokIsValid, setKelompokIsValid] = useState(null);
	const [formIsValid, setFormIsValid] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();

		if (formIsValid) {
			console.log({ nama, kelompok });
			onAddPraktikan({ nama: nama, kelompok: kelompok });

			setNama('');
			setKelompok('');
		} else {
			alert('Form tidak valid');
		}
	};

	const changeNamaHandler = (e) => {
		setNamaIsValid(e.target.value.trim().length > 0);
		setNama(e.target.value);
	};

	const changeKelompokHandler = (e) => {
		setKelompokIsValid(e.target.value.trim().length > 0);
		setKelompok(e.target.value);
	};

	useEffect(() => {
		setFormIsValid(namaIsValid && kelompokIsValid);
		console.log(`${Form.name}: ${formIsValid}`);
	}, [namaIsValid, kelompokIsValid, formIsValid]);

	return (
		<form onSubmit={submitHandler} className="mt-20 w-full max-w-5xl flex flex-col">
			<div className="flex flex-col gap-4 mb-10">
				<label htmlFor="nama" className="text-start mt-5">
					Nama
				</label>
				<input
					className={`${
						namaIsValid === false ? 'border border-red-500' : ''
					} py-1 rounded-md px-2 shadow-md`}
					autoComplete="off"
					type="text"
					id="nama"
					nama="nama"
					value={nama}
					onChange={changeNamaHandler}
					onBlur={changeNamaHandler}
				/>
				<label htmlFor="kelompok" className="text-start mt-5">
					Kelompok
				</label>
				<input
					className={`${
						namaIsValid === false ? 'border border-red-500' : ''
					} py-1 rounded-md px-2 shadow-md`}
					autoComplete="off"
					type="number"
					id="kelompok"
					nama="kelompok"
					value={kelompok}
					onChange={changeKelompokHandler}
					onBlur={changeKelompokHandler}
				/>
				<label className="text-start mt-5">Angkatan</label>
				<ComboBox />
				<label className="text-start mt-5">Jenis Kelamin</label>
				<div className="flex items-center gap-4">
					<span>Laki</span>
					<Toogle /> <span>Perempuan</span>
				</div>
			</div>
			<div className="flex gap-5">
				<button
					className="rounded-md bg-slate-400 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
					type="submit"
				>
					Buat Kartu Praktikan
				</button>
				<Modal />
			</div>
		</form>
	);
}

export default Form;
