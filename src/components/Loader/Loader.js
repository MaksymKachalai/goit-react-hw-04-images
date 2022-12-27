import { BallTriangle } from "react-loader-spinner";
import React, { Component } from "react";
import "./Loader.css";

export class Loader extends Component {
	render() {
		return (
			<div className="loader-box">
				<BallTriangle
					height={100}
					width={100}
					radius={5}
					color="#4fa94d"
					ariaLabel="ball-triangle-loading"
					wrapperClass={{}}
					wrapperStyle=""
					visible={true}
				/>
			</div>
		);
	}
}

export default Loader;
