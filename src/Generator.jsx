import { useState, useCallback, useRef } from "react";
import QRCode from "react-qr-code";


function downloadBlob(blob, filename) {
    const objectUrl = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
  }

export default function Generator(){

    const [link, setLink] = useState("");
    let linkValue = "";

    function generateQRCode(){
        setLink(linkValue);
    }
    function updateLink(e){
        linkValue = e.target.value;
    }

    const svgRef = useRef();
    
    const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `MyQRCode.svg`);
    }, []);

    return (
        <section className="container">
            <article className="qr-code-container">
                <div className="qr-code" ref={svgRef}>
                    <QRCode value={link}/>
                </div>
                <button className="button" onClick={downloadSVG}>Download Now!</button>
            </article>
            <article className="link">
                <h2>Please input your link below!</h2>
                <input className="input" onChange={(e)=> updateLink(e)}></input>
                <button className="button" onClick={()=>generateQRCode()}>Generate QR Code</button>
            </article>
        </section>
    );

}

