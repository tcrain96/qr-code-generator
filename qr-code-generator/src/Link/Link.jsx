import QRCode from "../QRCode/QRCode";
import styles from "./Link.module.css";
function Link(){

    return (
        <section className={styles.container}>
            <QRCode/>
            <article className="link">
                <h2>Please input your link below!</h2>
                <input></input>
                <button>Generate QR Code</button>
            </article>
        </section>
        
    );

}

export default Link