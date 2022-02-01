function Projects(){
    return (
        <div className="container">
            <h2>projects</h2>
            <br/>
            <div className="card-deck">
                <div className="card" id="project">
                    <img className="card-img-top" src="http://localhost:3000/silvermark.png" alt="SILVERMARK"/>
                    <div className="card-body">
                        <h5 className="card-title">SILVERMARK</h5>
                        <p className="card-text">
                            SILVERMARK is a minimalist bookmark manager application that allows users to create, view, and delete bookmarks.
                            SILVERMARK utilizes a Ruby on Rails backend and a JavaScript frontend. SILVERMARK utilizes a React framework and Redux middleware.
                        </p>
                        <a href="https://github.com/am20dipi/silvermark"  target="_blank" rel="noopener noreferrer" className="card-link">github</a>
                        <a href="https://youtu.be/67Rem5GVe4M"  target="_blank" rel="noopener noreferrer" className="card-link">demo</a>
                    </div>
                </div>
                <div className="card" id="project">
                    <img className="card-img-top" src="..." alt="ADR-UI"/>
                    <div className="card-body">
                        <h5 className="card-title">ADR-UI</h5>
                        <p className="card-text">
                            ADR-UI is a UI library that exemplifies simple, reusable code to be utilized in future applications.
                            ADR-UI utilizes JavaScript, HTML, CSS, Webpack and Node Package Manager.
                        </p>
                        <a href="https://github.com/am20dipi/adr-ui"  target="_blank" rel="noopener noreferrer" className="card-link">github</a>

                    </div>
                </div>
                <div className="card" id="project">
                    <img className="card-img-top" src="..." alt="UPFRONT"/>
                    <div className="card-body">
                        <h5 className="card-title">UPFRONT</h5>
                        <p className="card-text">
                            UPFRONT is a single page application that allows users to create, view, edit and delete items (or tasks) in a to-do list format.
                            UPFRONT utilizes a Ruby on Rails backend and a JavaScript frontend.
                        </p>
                        <a href="https://github.com/am20dipi/upfront-task-2"  target="_blank" rel="noopener noreferrer" className="card-link">github</a>
                        <a href="https://youtu.be/wWfE_soApbw"  target="_blank" rel="noopener noreferrer" className="card-link">demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects