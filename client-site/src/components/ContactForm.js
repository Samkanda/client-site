import React from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
// import { useAnimation } from 'framer-motion';


export const ContactForm = () => {
        // const controls = useAnimation();
        const [element, view] = useInView({threshold: 0.3});
    return (
        <div>
            <AA>
              <TextOutline initial={{x: "0rem"}}
                animate={view ? {x: "6rem"} : {x: "0rem"}}
                transition={{duration: .7}}>Contact Us</TextOutline>
              <h2>Contact <span>Us</span></h2>
            </AA>
        <FormContainer ref={element}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
        </div>
    )
}

const FormContainer = styled.div`
    max-width: 100rem;
    padding: 5rem;
    padding-left: 5rem;

`;

const TextOutline = styled(motion.h1)`
    font-family: 'Teko', sans-serif;
    font-size: 180px;
    color: transparent;
    font-weight: normal;
    letter-spacing: 3px;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
    line-height: 220px;
    position: absolute;
    
    
`

const AA = styled(motion.div)`
    position: relative; 
    left: 2rem;
    h2{
        color: white;
        padding-top: 5rem;
        
    }

`
