import { motion } from 'framer-motion'
import React from 'react'
import {pageAnimation} from "../animation"
export const ContactUs = () => {
    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{background: "#fff"}}
        >
            <h1>Our CONTACT</h1>
        </motion.div>
    )
}
