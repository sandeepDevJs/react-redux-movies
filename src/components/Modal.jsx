import React from "react";
import { connect } from "react-redux";
import { Button, Header, Icon, Modal, Dimmer, Loader } from "semantic-ui-react";

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
					<Dimmer active={!props.videosData.movies}>
						<Loader indeterminate>Preparing Video</Loader>
					</Dimmer>
				</Header>
				<Modal.Content>
					{props.videosData.movies && (
						<iframe
							title={props.videosData.movies[0].name}
							width="650"
							height="325"
							src={`https://www.youtube.com/embed/${props.videosData.movies[0].key}`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					)}
				</Modal.Content>
				<Modal.Actions>
					<center>
						<Button basic inverted onClick={() => props.modalFun(false)}>
							<Icon name="remove" />
						</Button>
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
