import silvermark from '../images/silvermark.png'
import upfront from '../images/upfront.png'

import tooltip1 from '../images/tooltip1.png'
import tooltip2 from '../images/tooltip2.png'

import React, { useState, useEffect } from 'react'
import gif from '../images/silvermark.gif'
import  Button  from 'react-bootstrap/Button'
import { Modal }  from 'react-bootstrap'


function Projects(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="container">

            <br/>
            <div className="card-deck">
                <div className="card" id="project">
                    <img className="card-img-top" src={silvermark} alt="SILVERMARK image" style={{padding: '1px 1px', borderRadius: '7px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">SILVERMARK</h5>
                        <p className="card-text text-muted">
                            SILVERMARK is a minimalist bookmark manager application that allows users to create, view, and delete bookmarks.
                            SILVERMARK utilizes a Ruby on Rails backend and a JavaScript frontend. SILVERMARK utilizes a React framework and Redux middleware.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/am20dipi/silvermark"  target="_blank" rel="noopener noreferrer" className="card-link"><i className="fa fa-github"></i></a>
                            <br/>
                            <Button className="btn" variant="primary" onClick={handleShow}>
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
                    </div>
                    
                </div>
                <div className="card" id="project">
                    <img className="card-img-top" src={tooltip1} alt="tooltip-UI"/>
                    <img className="card-img-top" src={tooltip2} alt="tooltip"/>
                    <div className="card-body">
                        <h5 className="card-title">ADR-UI</h5>
                        <p className="card-text text-muted">
                            ADR-UI is a UI library that exemplifies simple, reusable code to be utilized in future applications.
                            ADR-UI utilizes JavaScript, HTML, CSS, Webpack and Node Package Manager.
                        </p>
                    </div>
                    <div className="card-footer">
                            <a href="https://github.com/am20dipi/adr-ui"  target="_blank" rel="noopener noreferrer" className="card-link" ><i className="fa fa-github"></i></a>
                    </div>
                </div>
                <div className="card" id="project">
                    <img className="card-img-top" style={{height: '11em'}} src={upfront} alt="UPFRONT"/>
                    <div className="card-body">
                        <h5 className="card-title">UPFRONT</h5>
                        <p className="card-text text-muted">
                            UPFRONT is a single page application that allows users to create, view, edit and delete items (or tasks) in a to-do list format.
                            UPFRONT utilizes a Ruby on Rails backend and a JavaScript frontend.
                        </p>
                        
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/am20dipi/upfront-task-2"  target="_blank" rel="noopener noreferrer" className="card-link" ><i className="fa fa-github"></i></a>
                        {/* <a href="https://youtu.be/wWfE_soApbw"  target="_blank" rel="noopener noreferrer" className="card-link">demo</a> */}
                    </div>
                </div>
                <div className="card" id="project">
                    <img className="card-img-top" style={{height: '11em'}} src=".." alt="dillonperino.com"/>
                    <div className="card-body">
                        <h5 className="card-title">dillonperino.com</h5>
                        <p className="card-text text-muted">
                            dillonperino.com is an art portfolio for a very talented artist. dillonperino.com exemplifies the living and ever-changing skills and accomplishments of Dillon Perino.
                        </p>
                        
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/am20dipi/dillonperino"  target="_blank" rel="noopener noreferrer" className="card-link" ><i className="fa fa-github"></i></a>
                        {/* <a href="https://youtu.be/wWfE_soApbw"  target="_blank" rel="noopener noreferrer" className="card-link">demo</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects