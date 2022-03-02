import GoodreadsWidget  from "./GoodreadsWidget.js"
import Music from "./Music.js"

function About(){
    return(
        <section>
            <div className="container" style={{textAlign: 'left'}}>
                <h2 style={{fontFamily: 'Ultra', fontSize: '60px'}}>adri</h2>
                <p>...</p>
                <p>I am a software engineer in love with reading and my cats.</p>
                <p>I live in New York.</p>
            </div>
            <GoodreadsWidget/> 
            <Music/>

    </section>
    )

}

export default About