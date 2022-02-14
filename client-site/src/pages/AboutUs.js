import React from 'react';

//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection2 from '../components/ServicesSection2';

// import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { Gallary } from '../components/Gallary';

//Animations
import {motion} from 'framer-motion';

const AboutUs = () => {
    return(
        <motion.div exit={{ scaleY: 0}} transition={{duration: .5}}>
            <AboutSection/>
            <ServicesSection2/>            
            <Gallary/>
            <Footer/>
        </motion.div>
    )
}
export default AboutUs;