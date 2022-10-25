import React from 'react';
import Card from './component/Card';
import Form from './component/Form';

function App() {
	const [praktikan, setPraktikan] = React.useState(null);

	const addPraktikanHandler = (data) => {
		console.log(data);
		setPraktikan(data);
	};

	const removePraktikanHandler = () => {
		setPraktikan(null);
	};

	return (
		<div className="App">
			<h1>Kartu Praktikan</h1>
			<Form onAddPraktikan={addPraktikanHandler} />
			{/* Conditional rendering */}

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
