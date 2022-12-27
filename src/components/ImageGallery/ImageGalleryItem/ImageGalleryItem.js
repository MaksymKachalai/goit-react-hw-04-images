import PropTypes from "prop-types";
import React, { Component } from "react";
import Modal from "../../Modal/Modal";
import "./ImageGalleryItem.css";

export class ImageGalleryItem extends Component {
	state = {
		isModalActive: false,
	};
	static propTypes = { isModalActive: PropTypes.bool };

	toggleModal = () => {
		this.setState(({ isModalActive }) => ({ isModalActive: !isModalActive }));
	};

	render() {
		const { smallImage, largeImage, tags } = this.props;
		const { isModalActive } = this.state;
		return (
			<>
				<li
					className="gallery-item"
					onClick={this.toggleModal}>
					<img
						className="gallery-item__image"
						src={smallImage}
						alt={tags}
					/>
				</li>
				{isModalActive && (
					<Modal handleModalClick={this.toggleModal}>
						<img
							src={largeImage}
							alt={tags}
						/>
					</Modal>
				)}
			</>
		);
	}
}

export default ImageGalleryItem;
