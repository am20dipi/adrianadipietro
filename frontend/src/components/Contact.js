import gmail from '../gmail.png'

function Contact(){
    return (
        <section>
            <div className="container">
                <h2>contact me</h2>
                <div className="card-deck">
                    <div className="card" style={{border: 'none', background: 'none', boxShadow: 'none'}} id="contact">
                        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="adriana-dipietro" data-version="v1">
                            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/adriana-dipietro?trk=profile-badge"></a>
                        </div>
                    </div>
                    <div className="card" style={{width:'8em !important', borderRadius: '8px', height: '18.5em'}} id="contact">
                        <div className="card-header" style={{border: 'none', height: '3em' }}>
                            <img className="card-img-top" src={gmail} style={{width: '2em'}}/>
                        </div>
                        <div className="card-body" >
                            <p className="card-text">
                                adrianadipietro4@gmail.com
                            </p>
                            <a className="emailbutton" href="https://mail.google.com/mail/?view=cm&fs=1&to=adrianadipietro4@gmail.com&su=Hi+Adriana"  target="_blank" rel="noopener noreferrer" className="card-link">email me</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact