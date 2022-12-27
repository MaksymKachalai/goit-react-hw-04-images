import React, { Component } from "react";
import "./ButtonLoadMore.css";

export class ButtonLoadMore extends Component {
	render() {
		const { onClick } = this.props;
		return (
			<div className="button-box">
				<button
					type="button"
					className="button-load"
					onClick={onClick}>
					Load more
				</button>
			</div>
		);
	}
}

export default ButtonLoadMore;
