import React, { useState, useReducer } from "react";
import moment from "moment";
import "react-dates/initialize";
import { Form, Row, Col } from "react-bootstrap";

import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Button } from "@material-ui/core";

const initialState = {
	title: "",
	category: "",
	image: "",
	description: "",
	goal: 0,
	goalItem: "",
	deadline: "",
};

const reducer = (state, { field, value }) => {
	return {
		...state,
		[field]: value,
	};
};

const ProjectForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [focused, setFocused] = useState("");
	const [createdAt, setCreatedAt] = useState("");
	const [projects, setProjects] = useState([]);

	const handleChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onFocusChange = ({ focused }) => {
		setFocused({ focused });
	};

	const onDateChange = (date) => {
		if (date) {
			setCreatedAt(date);
		}
	};

	return (
		<div className="ProjectForm">
			<div className="projectform-wrapper">
				<form onSubmit={handleSubmit} className="project-form">
					<h3 className="mt-3 ProjectForm__header">Create a new project</h3>
					<div className="input-container">
						<span className="input-label">Your project name</span>
						<input
							className="project-form__input"
							type="text"
							placeholder="title"
							value={state.title}
							onChange={handleChange}
							name="title"
						/>
					</div>
					<div className="input-container">
						<span className="input-label">Category</span>
						<input
							className="project-form__input"
							type="text"
							placeholder="category"
							value={state.category}
							onChange={handleChange}
							name="category"
						/>
					</div>
					<div className="input-container">
						<span className="input-label">Description</span>

						<textarea
							className="project-form__input"
							type="text"
							placeholder="description"
							value={state.description}
							onChange={handleChange}
							name="description"
						/>
					</div>
					<div className="input-container">
						<span className="input-label">Goal</span>
						<input
							className="project-form__input"
							type="number"
							placeholder="goal"
							value={state.goal}
							onChange={handleChange}
							name="goal"
						/>
					</div>
					<div className="input-container">
						<span className="input-label">Goal item</span>

						<input
							className="project-form__input"
							type="text"
							placeholder="goalItem"
							value={state.goalItem}
							onChange={handleChange}
							name="goalItem"
						/>
					</div>
					<div className="input-container">
						<span className="input-label">Select a deadline</span>
						<SingleDatePicker
							date={state.createdAt}
							onDateChange={onDateChange}
							focused={focused}
							onFocusChange={onFocusChange}
							numberOfMonths={2}
							isOutsideRange={() => false}
						/>
					</div>
					<button type="submit" className="project-form__button">
						Create Project
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProjectForm;
