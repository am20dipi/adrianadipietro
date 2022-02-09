import GoodreadsWidget  from "./GoodreadsWidget.js"
import Music from "./Music.js"

function About(){
    return(
        <section>
            <div className="container">
                <h2>about me</h2>
                <p>...</p>
                <p>My name is Adriana. I am a software engineer. I love reading. I live in New York.</p>
            </div>
            {/* <GoodreadsWidget/> */}
            <Music/>

    </section>
    )

}

export default About