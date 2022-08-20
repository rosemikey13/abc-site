import styles from "./Home.module.css";
import { motion } from "framer-motion";
import React from "react";

const Home = () => {

    return(

        <motion.span className={styles.span_main}
        initial={{x: -3000}}
        animate={{x:0}}
        transition = {{duration:3, delay: .2}}
        >

        <motion.span className={styles.span}
        >
        <motion.h2 className={styles.h2}
        animate = {{opacity: 1}}
        initial = {{opacity: 0}}
        transition = {{duration: 3.5, delay:3}}
        >
            Welcome
        </motion.h2>

        <motion.h2 className={styles.h2}
        animate = {{opacity: 1}}
        initial = {{opacity: 0}}
        transition = {{duration: 3.5, delay: 4}}>
            To
        </motion.h2>
        </motion.span>

        <motion.section className={styles.section}>
        <motion.h2 className={styles.h2}
        animate = {{opacity: 1}}
        initial = {{opacity: 0}}
        transition = {{duration: 4, delay: 4.5}}
        >
            A.
        </motion.h2>
        <motion.h2 className={styles.h2}
        animate = {{opacity: 1}}
        initial = {{opacity: 0}}
        transition = {{duration: 4, delay: 5}}
        >
            B.
        </motion.h2>
        <motion.h2 className={styles.h2}
        animate = {{opacity: 1}}
        initial = {{opacity: 0}}
        transition = {{duration: 4, delay: 5.5}}
        >
            C.
        </motion.h2>
        </motion.section>
        </motion.span>
        
        
    )

}

export default Home;