import React, { useState } from 'react';
import Card from './component/Card';
import Form from './component/Form';
import './index.css';

function App() {
	const [praktikan, setPraktikan] = useState(null);

	const addPraktikanHandler = (data) => {
		console.log(data);
		setPraktikan(data);
	};

	const removePraktikanHandler = () => {
		setPraktikan(null);
	};

	return (
		<div className="flex text-center justify-start items-center flex-col p-20 bg-slate-200 h-[100vh] w-full">
			<h1 className="text-3xl font-bold">Kartu Praktikan</h1>
			<Form onAddPraktikan={addPraktikanHandler} />
			{praktikan && (
				<>
					<button className="delete" onClick={removePraktikanHandler}>
						Hapus
					</button>
					<Card nama={praktikan.nama} kelompok={praktikan.kelompok} />
				</>
			)}
		</div>
	);
}

export default App;
