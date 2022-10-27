import React, { useState, useEffect } from 'react';

const Quote = () => {
	const [quote, setQuote] = useState(null);

	useEffect(() => {
		fetch('http://staging.quotable.io/random')
			.then((res) => res.json())
			.then((data) => setQuote(data));
	}, []);

	return (
		<div className="mt-20 bg-slate-50 rounded-xl p-5">
			<p>{quote && quote.content}</p>
			<h1 className="font-bold">-{quote && quote.author}</h1>
		</div>
	);
};

export default Quote;
