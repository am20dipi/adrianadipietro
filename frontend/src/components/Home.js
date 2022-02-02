
function Home(){
    return(
        <div className="parallax">
            <div className="container">
                <h1>ADRIANA DIPIETRO</h1>
                <p>...</p>
                <h2>FRONTEND FOCUSED SOFTWARE ENGINEER</h2>
                <h3>WITH FULL STACK EXPERIENCE</h3>
            </div>
            <div className="container">
                <h5>MOTIVATED TO PRODUCE RESULTS</h5>
                <p>With an untraditional background, I do not let expectations rule over my behavior.</p>
                <p>I prioritize effective results by effective means.</p>
                <h5>LIFELONG TEACHER + STUDENT</h5>
                <p>As I am consistently self-teaching, I welcome new technologies as learning experiences.</p>
                <p>I enjoy collaborating both by being a team player and a teacher when needed.</p>
                {/* JS ICON, REACT ICON, HTML ICON, NODE ICON */}
            </div>
            <div className="container">
                <div className="card-deck">
                    <div className="card" id="skillset">
                        <h5>FRONTEND</h5>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                    <div className="card" id="skillset">
                        <h5>DATABASE</h5>
                        <ul>
                            <li>mySQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div className="card" id="skillset">
                        <h5>SERVER</h5>
                        <ul>
                            <li>Node.js</li>
                            <li>Babel</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                    <div className="card" id="skillset"></div>
                </div>
            </div>
        </div>
    )

}

export default Home