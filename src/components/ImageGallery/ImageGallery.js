import PropTypes from "prop-types";
import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import ImageApi from "../../service/image-api";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import Loader from "../Loader/Loader";
import "./ImageGallery.css";

export class ImageGallery extends Component {
	state = {
		images: [],
		error: "",
		page: 1,
		isLoader: false,
	};

	static propTypes = {
		error: PropTypes.string,
		page: PropTypes.number,
		isLoader: PropTypes.bool,
		images: PropTypes.arrayOf(
			PropTypes.shape({
				hits: PropTypes.arrayOf(
					PropTypes.shape({
						id: PropTypes.string,
						webformatURL: PropTypes.string,
						largeImageURL: PropTypes.string,
						tags: PropTypes.arrayOf(PropTypes.string),
					})
				),
			})
		),
	};

	componentDidUpdate(prevProps, prevState) {
		const { query } = this.props;
		if (prevProps.query !== query) {
			this.setState({ isLoader: true });
			ImageApi(query)
				.then((images) => this.setState({ images: images.hits, page: 2 }))
				.catch((error) => this.setState({ error }))
				.finally(() => this.setState({ isLoader: false }));
		}
	}

	handleButtonClick = () => {
		const { query } = this.props;
		const { page } = this.state;

		this.setState(({ page }) => ({
			page: page + 1,
			isLoader: true,
		}));

		ImageApi(query, page)
			.then((images) =>
				this.setState((prevState) => ({
					images: [...prevState.images, ...images.hits],
				}))
			)
			.catch((error) => this.setState({ error }))
			.finally(() => this.setState({ isLoader: false }));
	};

	render() {
		const { images, isLoader } = this.state;
		const isImages = Boolean(images.length);
		return (
			<>
				<ul className="image-gallery">
					{"Nothing" &&
						images.map(({ id, webformatURL, largeImageURL, tags }) => {
							return (
								<ImageGalleryItem
									key={id}
									smallImage={webformatURL}
									largeImage={largeImageURL}
									tags={tags}
								/>
							);
						})}
				</ul>
				{isLoader && <Loader />}
				{isImages && <ButtonLoadMore onClick={this.handleButtonClick} />}
			</>
		);
	}
}

export default ImageGallery;
