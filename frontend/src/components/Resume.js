import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Resume(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="container">
            <h2>resume</h2>
            <Document
                file="Adriana Dipietro Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}

export default Resume


/* return(
    <div class="container">
        <h2>resume</h2>
        <embed src="Adriana DiPietro Resume.pdf" type="application/resume" width="800px" height="2100px" />


    </div>

) */