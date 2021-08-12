import React from 'react';

//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
// import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { Gallary } from '../components/Gallary';

//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
    return(
        <motion.div exit={{ scaleY: 0}} transition={{duration: .5}}>
            <AboutSection/>
            <ServicesSection/>
            {/* <ContactForm/> */}
            <Gallary/>
            <Footer/>
        </motion.div>
    )
}
export default AboutUs;