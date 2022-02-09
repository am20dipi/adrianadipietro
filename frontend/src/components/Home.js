
function Home(){
    return(
        <div className="parallax">
            <div className="header">
                <h1>ADRIANA DIPIETRO</h1>
                <p>...</p>
                <h2>FRONTEND FOCUSED SOFTWARE ENGINEER</h2>
                <h3>WITH FULL STACK EXPERIENCE</h3>
            </div>
            <div className="container">
                <h5>MOTIVATED TO PRODUCE RESULTS</h5>
                <p>With an untraditional background, I introduce new perspectives and creativity.</p>
                <p>I prioritize effective results by effective means.</p>
                <br/>
                <h5>LIFELONG TEACHER + STUDENT</h5>
                <p>As I am consistently self-teaching, I welcome new technologies as learning experiences.</p>
                <p>I enjoy collaborating both by being a team player, a student, and a teacher.</p>
                {/* JS ICON, REACT ICON, HTML ICON, NODE ICON */}
            </div>
            <div className="container">
                <div className="card-deck">
                    <div className="card" id="skillset">
                        <div className="card-body">
                            <h5 className="card-title">FRONTEND</h5>
                                 <li className="text-muted">JavaScript</li>
                                 <li className="text-muted">HTML5</li>
                                 <li className="text-muted">CSS</li>
                                 <li className="text-muted">React</li>
                                 <li className="text-muted">Redux</li>
                        </div>
                        
                    </div>
                    <div className="card" id="skillset">
                        <div className="card-body">
                                <h5 className="card-title">DATABASE</h5>
                                     <li className="text-muted">mySQL</li>
                                     <li className="text-muted">PostgreSQL</li>
                                     <li> </li>
                                     <li> </li>
                                     <li> </li>
                        </div>
                    </div>
                    <div className="card" id="skillset">
                        <div className="card-body">
                            <h5 className="card-title">SERVER-SIDE</h5>
                                 <li className="text-muted">Node.js</li>
                                 <li className="text-muted">Webpack</li>
                                 <li className="text-muted">Babel</li>    
                                 <li> </li>
                                 <li> </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home