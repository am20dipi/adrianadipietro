
function Home(){
    return(
        <div className="parallax">
            <div className="header">
                <h1>ADRIANA DIPIETRO</h1>
                <p>...</p>
                <h2>FRONTEND-FOCUSED SOFTWARE ENGINEER</h2>
                <h3>WITH FULL STACK EXPERIENCE</h3>
                <br/>

                    <i className="fa-brands fa-js-square fa-xl"></i>
                    <i className="fa-brands fa-react fa-xl"></i>
                    <i className="fa-brands fa-html5 fa-xl"></i>
                    <i className="fa-brands fa-css3-alt fa-xl"></i>
                    <i className="fa-brands fa-node-js fa-xl"></i>
                

            </div>
            <div className="container">
                <h3>MOTIVATED TO PRODUCE RESULTS</h3>
                <p>With an untraditional background, I introduce new perspectives and creativity.</p>
                <p>I prioritize effective results by effective means.</p>
            </div>
            <div className="container">
                <h3>LIFELONG TEACHER + STUDENT</h3>
                <p>As I am consistently self-teaching, I welcome new technologies as learning experiences.</p>
                <p>I enjoy collaborating both by being a team player, a student, and a teacher.</p>
                {/* JS ICON, REACT ICON, HTML ICON, NODE ICON */}
            </div>
            <div className="container">
                <div className="card-deck">
                    <div className="card" id="skillset">
                        <div className="card-body">
                                <h5 className="card-title">DATABASE</h5>
                                     <li className="text-muted">mySQL</li>
                                     <li className="text-muted">PostgreSQL</li>
                        </div>
                    </div>
                    <div className="card" id="skillset">
                        <div className="card-body">
                            <h5 className="card-title">FRONTEND</h5>
                                 <li className="text-muted">JavaScript</li>
                                 <li className="text-muted">HTML5</li>
                                 <li className="text-muted">CSS</li>
                                 <li className="text-muted">React</li>
                                 <li className="text-muted">Redux</li>
                                 <li className="text-muted">Bootstrap | Material-UI</li>
                                 <li className="text-muted">Webpack</li>
                                 <li className="text-muted">Babel</li> 
                        </div>
                    </div>
                    <div className="card" id="skillset">
                        <div className="card-body">
                            <h5 className="card-title">SERVER-SIDE</h5>
                                 <li className="text-muted">Node.js</li>   
                                 <li className="text-muted">Ruby</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home