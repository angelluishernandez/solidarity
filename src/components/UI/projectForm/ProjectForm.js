import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { Form, Row, Col } from "react-bootstrap";

import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Button } from "@material-ui/core";

export default class ProjectForm extends React.Component {
	state = {
		projects: [],
		data: {
			title: "",
			category: "",
			image: "",
			description: "",
			goal: 0,
			goalItem: "",
			deadline: "",
		},
		createdAt: "",
		focused: "",
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({
			...this.state,
			data: {
				...this.state.data, 
				[name]: value,
			},


		});

		console.log(this.state)
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	onFocusChange = ({focused}) =>{
		this.setState({focused})
	}

	onDateChange = date =>{
		if(date){
			this.setState({
				createdAt: date
			})
		}
	}
	render() {
		return (
			<div className="ProjectForm">
				<form onSubmit={this.handleSubmit} className="project-form">
					<h3 className="mt-3 ProjectForm__header">Create a new project</h3>
					<input
						className="project-form__input"
						type="text"
						placeholder="title"
						value={this.state.data.title}
						onChange={this.handleChange}
						name="title"
					/>
					<input
						className="project-form__input"
						type="text"
						placeholder="category"
						value={this.state.data.category}
						onChange={this.handleChange}
						name="category"
					/>
					<textarea
						className="project-form__input"
						type="text"
						placeholder="description"
						value={this.state.data.description}
						onChange={this.handleChange}
						name="description"
					/>
					<input
						className="project-form__input"
						type="number"
						placeholder="goal"
						value={this.state.data.goal}
						onChange={this.handleChange}
						name="goal"
					/>
					<input
						className="project-form__input"
						type="text"
						placeholder="goalItem"
						value={this.state.data.goalItem}
						onChange={this.handleChange}
						name="goalItem"
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.focused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={2}
						isOutsideRange={() => false}
					/>
					<button type="submit" className="project-form__button">
						Create Project
					</button>
				</form>
			</div>
		);
	}
}

/////////////////////////7
//  <div>
// 			<Form>
// 				<Form.Row>
// 					<Form.Group as={Col} md="4" controlId="validation1">
// 						<Form.Label>Project title</Form.Label>
// 						<Form.Control
// 							required
// 							type="text"
// 							placeholder="Project title..."
// 							name="title"
// 						/>
// 						<Form.Control.Feedback>Nice!</Form.Control.Feedback>
// 					</Form.Group>
// 				</Form.Row>
// 			</Form>
// 		</div>
