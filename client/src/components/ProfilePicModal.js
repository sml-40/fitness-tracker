import React, { Component } from "react";
import { Button, Modal } from "antd";
import { Container } from "react-bootstrap";
import usman_pic from "../userImage/usman_pic.png";
import Coffee from "../userImage/Coffee.jpg";
import coffeeheart from "../userImage/coffeeheart.jpg";

class ProfilePicModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			imagesArray: [props.usman_pic, props.Coffee, props.coffeeheart],
		};
	}

	showModal = () => {
		this.setState({ open: true });
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({ open: false });
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({ open: false });
	};

	selectProfileImage = (profileImage) => {
		this.props.handleImageChange(profileImage);
		this.setState({
			open: false,
		});
	};

	render() {
		return (
			<Container>
				<Button
					type="primary"
					onClick={this.showModal}>
					Profile
				</Button>
				<Modal
					centered
					title="Usman's Profile"
					open={this.state.open}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<p>I like to eat lots of popcorn...</p>
					<p>Am all about the gainz...</p>
					<p>Usman for the next Strongman...</p>
					<div style={{ display: "flex", flexWrap: "wrap" }}>
						<img
							src={usman_pic}
							alt="usman_pic"
							style={{ width: "20%", height: "auto", cursor: "pointer" }}
							onClick={() => this.selectProfileImage(usman_pic)}
						/>
						<img
							src={Coffee}
							alt="Coffee"
							style={{ width: "20%", height: "auto", cursor: "pointer" }}
							onClick={() => this.selectProfileImage(Coffee)}
						/>
						<img
							src={coffeeheart}
							alt="coffeeheart"
							style={{ width: "20%", height: "auto", cursor: "pointer" }}
							onClick={() => this.selectProfileImage(coffeeheart)}
						/>
					</div>
				</Modal>
			</Container>
		);
	}
}

export default ProfilePicModal;
