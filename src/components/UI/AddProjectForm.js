import React from "react";
import { connect } from "react-redux";
import ProjectForm from "./projectForm/ProjectForm";

const AddProjectForm = () => {
	return (
		<div className="AddProjectForm">
			<ProjectForm />
		</div>
	);
};

const mapStateToProps = state => {};

const mapDispatchToProps = state => {};

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm);
