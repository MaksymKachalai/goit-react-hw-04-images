import PropTypes from "prop-types";
import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
	state = {
		searchQuery: "",
	};
	static propTypes = {
		searchQuery: PropTypes.string,
	};

	onInputChange = (event) => {
		const { value } = event.currentTarget;
		this.setState({ searchQuery: value });
	};

	onFormHandler = (event) => {
		const { searchQuery } = this.state;
		event.preventDefault();
		this.props.onSubmit(searchQuery);
	};

	render() {
		return (
			<header className="searchbar">
				<form
					className="search-form"
					onSubmit={this.onFormHandler}>
					<button
						type="submit"
						className="search-form__button">
						<span className="search-form__button-label">Search</span>
					</button>

					<input
						className="search-form__input"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.onInputChange}
					/>
				</form>
			</header>
		);
	}
}

export default SearchBar;
