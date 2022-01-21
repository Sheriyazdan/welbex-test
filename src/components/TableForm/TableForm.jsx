import React from 'react';
import './TableForm.css';
import { useState } from 'react';

export default function TableForm({ filterSubmit, onReset }) {
	const [name, setName] = useState('');
	const [law, setLaw] = useState('');
	const [argument, setArgument] = useState('');

	function handleNameChange(e) {
		setName(e.target.value);
	}
	function handleLawChange(e) {
		setLaw(e.target.value);
	}
	function handleArgumentChange(e) {
		setArgument(e.target.value);
	}

	function onClearFilter() {
		setName('');
		setLaw('');
		setArgument('');
		onReset();
	}

	function handleSubmit(e) {
		e.preventDefault();
		filterSubmit({ name, law, argument });
	}

	return (
		<form className="table-form" onSubmit={handleSubmit}>
			<select name="name" value={name} onChange={handleNameChange} required>
				<option value="">Field...</option>
				<option value="name">Name</option>
				<option value="points">Number</option>
				<option value="distance">Distance</option>
			</select>
			<select name="law" value={law} onChange={handleLawChange} required>
				<option value="">Condition...</option>
				<option value="equal">Equals</option>
				<option value="contain">Contains</option>
				<option value="greater">More</option>
				<option value="less">Less</option>
			</select>
			<input
				name="argument"
				value={argument}
				onChange={handleArgumentChange}
				type="text"
				placeholder="Meaning"
				required
			/>
			<button className="table-form__button" type="reset" onClick={onClearFilter}>
				Reset
			</button>
			<button className="table-form__button" type="submit">
				Filter
			</button>
		</form>
	);
}
