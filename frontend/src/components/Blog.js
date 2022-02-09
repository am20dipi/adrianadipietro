
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
            <p className="text-muted">Here are some of my most recent blog posts. Click the arrow to read the full articles.</p>
            <div className="card-columns">
                {blogs.slice(0,9).map((blog, index) => {
                    return (
                        <div className="card" id="blog" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text text-muted">{blog.description}</p>
                                <br/>
                                {/* <ul className="text-muted ">
                                    {blog.tag_list.map((tag) => {
                                        return <small>#{tag}  </small>
                                    })}
                                </ul> */}
                                <p className="text-muted"><small>{blog.tags}</small></p>
                                <br/>
                                <br/>
                                <a href={blog.canonical_url} target="_blank" rel="noopener noreferrer" className="card-link"><i className="fa fa-arrow-circle-o-right"></i></a>
                                
                            </div>
                            <div className="card-footer">
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