import {motion} from "framer-motion"

export default function AdditionalGeneratorButton(props){

    return(
        <>
        <motion.section className="add-link-button-container"
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        >
            <button className="add-link-button" onClick={()=>{props.AddLinkAmount()}}> Add additional link +</button>
        </motion.section>
            
        </>
    );
}