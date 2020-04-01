import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ShowModal = (props) => {
    const { header, body, footer } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>{footer}</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowModal;