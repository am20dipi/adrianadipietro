import { Link } from 'react-router-dom'


function Blog(){
    return (
        <>
        <div className="container">
            <h2>blog</h2>
            <p className="text-muted">Here are some of my most recent blog posts.</p>
            <p className="text-muted"> Click the links to read the full articles. </p>
            <p className="text-muted"> Feel free to ask questions, leave comments or follow.</p>
            <div className="card-deck">
                <div className="card" id="blog">
                    <div className="card-body">
                        <h5 className="card-title">How To: Build a Linked List in JavaScript Part 3</h5>
                        <p className="card-text text-muted">
                            As the third installment of the series 'How To: Build A Linked List,' this article focuses on 
                            how to add insertion functionality via an insert() and traverse() method to our class LinkedList.
                        </p>
                        <br/>
                        <a href="https://dev.to/am20dipi/how-to-build-a-linked-list-in-javascript-part-3-77m" target="_blank" rel="noopener noreferrer" className="card-link">click here</a>
                        
                    </div>
                    <p className="card-text bg-light" style={{borderRadius: '8px'}}><small className="text-muted">Posted on January 25, 2022</small></p>
                </div>
                <div className="card" id="blog">
                    <div className="card-body">
                        <h5 className="card-title">LeetCode WalkThru: 'First Unique Character in a String'</h5>
                        <p className="card-text text-muted">
                            A step-by-step solution to a challenging LeetCode problem including explanations and code.
                        </p>
                        <br/>
                        <a href="https://dev.to/am20dipi/leetcode-walkthru-first-unique-character-in-a-string-1lh5" target="_blank" rel="noopener noreferrer" className="card-link">click here</a>
                    </div>
                    <p className="card-text bg-light" style={{borderRadius: '8px'}}><small className="text-muted">Posted on December 28, 2021</small></p>
                </div>
                <div className="card" id="blog">
                    <div className="card-body">
                        <h5 className="card-title">How To: Build a Simple Search Bar in JavaScript</h5>
                        <p className="card-text text-muted">
                            A beginner's guide to implementing a fully functional search bar feature in a JavaScript application. 
                        </p>
                        <br/>
                        <a href="https://dev.to/am20dipi/how-to-build-a-simple-search-bar-in-javascript-4onf"  target="_blank" rel="noopener noreferrer" className="card-link">click here</a>
                    </div>
                    <p className="card-text bg-light" style={{borderRadius: '8px'}}><small className="text-muted">Posted on November 14, 2021</small></p>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Blog