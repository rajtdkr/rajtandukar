import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
function Resume_app(){
        return(




    <div>


        <PDFExport paperSize={'Letter'}
    fileName="_____.pdf"
    title=""
    subject=""
    keywords=""
    ref={(r) => this.resume = r}>
        <div>content</div>
 </PDFExport>
    <footer class="foo">
        <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="HTML.html">1</a>
            <a href="css.html">2</a>
            <a href="javascript.html" >3</a>
            <a class="active">4</a>
            <a href="#">&raquo;</a>
        </div>
    </footer>

            </div>
        )
    }
export default Resume_app;