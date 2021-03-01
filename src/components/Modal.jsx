import React from "react";
import { connect } from "react-redux";
import {
	Button,
	Header,
	Icon,
	Modal,
	Dimmer,
	Loader,
	Message,
} from "semantic-ui-react";

const ModalBox = (props) => {
	return (
		<div>
			<Modal
				basic
				onClose={() => props.modalFun(false)}
				onOpen={() => props.modalFun(true)}
				open={props.open}
				size="small"
			>
				<Header>
					<Dimmer active={props.videosData.loading}>
						<Loader indeterminate>Preparing Video</Loader>
					</Dimmer>
				</Header>
				<Modal.Content>
					{props.videosData.movies && (
						<iframe
							title={props.videosData.movies[0].name}
							src={`https://www.youtube.com/embed/${props.videosData.movies[0].key}`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					)}

					{props.errorModal && (
						<Message
							error
							header="OOPPS!! There was some errors!"
							list={[`Try Reloading Again!!`]}
						/>
					)}
				</Modal.Content>
				<Modal.Actions>
					<center>
						{props.errorModal ? (
							<Button basic inverted onClick={() => window.location.reload()}>
								<Icon name="reload" />
							</Button>
						) : (
							<Button basic inverted onClick={() => props.modalFun(false)}>
								<Icon name="remove" />
							</Button>
						)}
					</center>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { videosData: state.getVideo };
};

export default connect(mapStateToProps)(ModalBox);
