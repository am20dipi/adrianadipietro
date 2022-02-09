import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import resume from '../images/AdrianaDiPietroResume.pdf'
import { Link } from 'react-router-dom'


function Resume(){
    pdfjs.GlobalWorkerOptions.workerSrc = 
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1)
    }

    return (
        <>
            <div className="container">
                <h2>resume</h2>
                <Link to={resume} target="_blank" download><i className="fa fa-download"></i></Link>
                <Document 
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                <p>...</p>
                <Link to={resume} target="_blank" download><i className="fa fa-download"></i></Link>
            </div>
        </>
        )
        
}

export default Resume


/* return(
    <div class="container">
        <h2>resume</h2>
        <embed src="Adriana DiPietro Resume.pdf" type="application/resume" width="800px" height="2100px" />


    </div>

) */