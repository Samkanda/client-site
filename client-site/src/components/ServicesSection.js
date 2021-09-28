import React from 'react';
//import Icons
import three from '../img/33.jpg'
import city from '../img/5.jpg'
import castle from '../img/6.jpg'

import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
const ServicesSection = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3});
    return(
        <Services ref={element}>
            <Card>
                <TileImage>
                    <img src={three} alt="dd"/>
                </TileImage>
            </Card>
        <LeftDiv>
        <Card>
                <TileImage4>
                    <img src={three} alt="dd"/>
                </TileImage4>
            </Card>
        <Card>
                <TileImage3>
                    <img src={city} alt="dd"/>
                </TileImage3>
            </Card>
        <Card>
                <TileImage2>
                    <img src={castle} alt="dd"/>
                </TileImage2>
            </Card>
        </LeftDiv>
        <RightDiv>
            <DivText>
            <div className="vl"></div>
            <h1>Please to Meet you</h1>
            <p>
                WELCOME! MY NAME IS LINDA, AND I HAVE BEEN A PHOTOGRAPHER AND VIDEOGRAPHER FROM THE GTA / 
                ONTARIO FOR OVER A DECADE NOW. WOW TIME FLIES!
            </p>
            </DivText>
        </RightDiv>
      </Services>
    )
}

const Services = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    @media (max-width: 1500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    min-height: 25rem;
}
    
`;

const Card = styled.div`
    flex-basis: 20rem;
    position:absolute;
    
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
`;

export const TileImage4 = styled(motion.div)`
    img{
        width:47vh;
        height:60vh;
        object-fit:cover;
        display: none;
    }
    @media (max-width: 1500px) {
        padding-top:2rem;
        padding-left:25vw;
        img{
        width:20vw;
        height:20rem;
        display: initial;
    }
}
    @media (max-width: 700px) {
        img{
        width:42vw;
        height:45vw;
        display: initial;
    }
    padding-top: 50vw;
    padding-left: 10vw; 
}   


`
export const TileImage = styled(motion.div)`
    padding-top: 15rem;
    img{
        width:47vh;
        height:60vh;
        object-fit:cover;
    }
    h3 {
        position: relative;
        bottom: 3rem;
        font-size: 50px;
        color: white;
    }
    @media (max-width: 1500px) {
        img{
        width:42vw;
        height:45vw;
        display: none;
    }
}
`;


export const TileImage2 = styled(motion.div)`
    padding-top: 25vw;
    padding-left: 8vw;
    img{
        width:27vw;
        height:20vw;
        object-fit:cover;
    };
    @media (max-width: 1500px) {
        padding-top: 12rem;
        padding-left: 1rem;
        img{
        width:18vw;
        height:9rem;
        object-fit:cover;
        display:wrap
    }
}
    @media (max-width: 700px) {
        padding-left: 0rem;
        padding-top: 3rem;
        img{
        width:52vw;
        height:35vw;
        }
    }
`;

export const TileImage3 = styled(motion.div)`
    padding-top: 6vw;
    padding-left: 5vw;
    img{
        width:30vw;
        height:17vw;
        object-fit:cover;
    }
    @media (max-width: 1500px) {
        padding-top: 2rem;
        padding-left: 1rem;
        img{
        width:18vw;
        height:9rem;
        object-fit:cover;   
    }

    @media (max-width: 700px) {
        padding-left: 55vw;
        img{
            width:38vw;
            height:52vw;
            object-fit:cover;
        }
}}
`

const LeftDiv = styled(motion.div)`
    width: 50%;
    background-color: #F2EBE4;
    @media (max-width: 700px) {
    height: 40vh;
    width: 100%;
}
`;
const RightDiv = styled.div`
    width: 50%;
    float: right;
    background-color: #C4A484;
    @media (max-width: 700px) {
    float:bottom;
    width: 100%;
    height: 120vw
}
`;

const DivText = styled(motion.div)`
    padding: 15rem;
    h1{
        font-family: 'STIX Two Text', serif;
        font-size: 7rem;
        padding-left: 2rem;  
    }
    p{
        padding-left: 2rem;
        color: black;
    }
    .vl{
        border-left: 2px solid black;
        height: 400px;
        position: absolute;
    }
    @media (max-width: 1500px) {
    justify-content: left;
    padding:1rem;
    h1{
        font-size: 5vw;
        padding-top: 0rem;
    }
    p{
        font-size: 2vw;
    }
    .vl{
        border-left: 2px solid black;
        height: 20rem;
        position: absolute;
    }}
    @media (max-width: 700px) {
    h1{
        font-size: 7vw;
        padding-top: 19rem;
    }
    p{
        font-size: 4vw;
    }
}
@media (max-width: 500px) {
    h1{
        font-size: 7vw;
        padding-top: 37vw;
    }
}

`;


export default ServicesSection;