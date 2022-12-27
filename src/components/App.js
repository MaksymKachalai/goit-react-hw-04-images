import PropTypes from "prop-types";
import React, { Component } from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import "./App.css";

export class App extends Component {
	state = {
		query: "",
	};
	static propTypes = {
		query: PropTypes.string,
	};

	onFormSubmit = (query) => {
		this.setState({ query });
	};
	render() {
		return (
			<div className="app">
				<SearchBar onSubmit={this.onFormSubmit} />
				<ImageGallery query={this.state.query} />
			</div>
		);
	}
}

export default App;
