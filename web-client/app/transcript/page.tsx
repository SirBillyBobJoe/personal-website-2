'use client'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './page.module.css';

export default function Resume() {
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = 'transcript.pdf';
        link.download = 'transcript.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container1}>
            <div className={styles.pdfContainer} onClick={downloadPdf}>
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                    <Viewer fileUrl="transcript.pdf" />
                </Worker>
            </div>
            <button onClick={downloadPdf} className={styles.downloadButton}>Download PDF</button>
        </div>
    );
}
