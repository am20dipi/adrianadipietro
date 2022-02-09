
import React, { useEffect, useState } from 'react'



function Blog(){
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch("https://dev.to/api/articles?username=am20dipi")
            .then(response => response.json())
            .then(response => {
                setBlogs(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
        <div className="container">
            <h2>blog</h2>
            <p className="text-muted">Here are some of my most recent blog posts. Click the links to read the full articles. Feel free to ask questions, leave comments or follow.</p>
            <div className="card-columns">
                {blogs.slice(0,9).map((blog, index) => {
                    return (
                        <div className="card" id="blog" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text text-muted">{blog.description}</p>
                                <br/>
                                {/* <ul className="text-muted">
                                    {blog.tag_list.map((tag) => {
                                        return <li>{tag}</li>
                                    })}
                                </ul> */}
                                <br/>
                                <br/>
                                <a href={blog.canonical_url} target="_blank" rel="noopener noreferrer" className="card-link">read more</a>
                                
                            </div>
                            <div class="card-footer">
                                <p className="card-text bg-light" style={{borderRadius: '8px'}}><small className="text-muted">Posted on {blog.readable_publish_date}</small></p>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
        </div>
            
        </>
    )
}

export default Blog