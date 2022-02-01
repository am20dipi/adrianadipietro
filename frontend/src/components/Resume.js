import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import resume from '../Resume.pdf'


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
                <Document 
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
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