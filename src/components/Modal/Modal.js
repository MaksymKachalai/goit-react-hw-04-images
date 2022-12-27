import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modal = document.querySelector("#modal-root");

export class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (event) => {
		const { code } = event;
		if (code === "Escape") {
			this.props.handleModalClick();
		}
	};

	onModalClick = (event) => {
		const { target, currentTarget } = event;
		if (target === currentTarget) {
			this.props.handleModalClick();
		}
	};

	render() {
		return createPortal(
			<div
				className="overlay"
				onClick={this.onModalClick}>
				<div className="modal">{this.props.children}</div>
			</div>,
			modal
		);
	}
}

export default Modal;
