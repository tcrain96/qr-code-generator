import { useState, useCallback, useRef } from "react";
import QRCode from "react-qr-code";
import {motion} from "framer-motion"

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

    const [submitLink, setSubmitLink] = useState("");
    const [link, setLink] = useState("");

    const svgRef = useRef();
    const downloadSVG = useCallback(() => {
        const svg = svgRef.current.innerHTML;
        const blob = new Blob([svg], { type: "image/svg+xml" });
        downloadBlob(blob, `MyQRCode.svg`);
        }, []);


    function updateQRCode(value){
        setSubmitLink(value);
    }
    function generateQRCode(){
        setLink(submitLink)
    }
  
    return (
        <motion.section 
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="container">
            
            {link!=""&&link!=null
            ?
            <article className="qr-code-container-download">
                <div className="qr-code" ref={svgRef}>
                    <QRCode value={link!=null?link:""}/>
                </div>
                <button className="button" onClick={downloadSVG}>Download Now!</button>
            </article>
            :
            <article className="qr-code-container-empty">
                <div className="qr-code" ref={svgRef}>
                    <QRCode value={link!=null?link:""}/>
                </div>
                <button className="button" onClick={downloadSVG}>Download Now!</button>
            </article>
            }

            <article className="link-container">
                <h2>Please input your link below!</h2>
                <input className="input" onChange={(e)=>{updateQRCode(e.target.value)}} ></input>
                <button className="button" onClick={()=>generateQRCode()}>Generate QR Code</button>
            </article>

        </motion.section>
    );

}

