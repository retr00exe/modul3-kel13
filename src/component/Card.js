import React from 'react';

function Card(props) {
	return (
		<div className="mt-20">
			<img src="avatar.png" alt="Avatar" className="rounded-md" />
			<div className="container">
				<h4>{props.nama}</h4>
				<p>Kelompok {props.kelompok}</p>
			</div>
		</div>
	);
}

export default Card;
