import React, {useState} from 'react'
import gif from '../silvermark.gif'
import  Button  from 'react-bootstrap/Button'
import  {Modal}  from 'react-bootstrap'

function GifModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                demo
            </Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SILVERMARK DEMO</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{marginLeft: '85px'}}>
                    <img alt="silvermark gif" src={gif}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default GifModal