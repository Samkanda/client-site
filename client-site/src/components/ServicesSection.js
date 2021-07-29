import React from 'react';
//import Icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {About, Hide, Description, Image} from "../styles"
import styled from 'styled-components';

const ServicesSection = () => {
    return(
        <Services>
          <Description>
              <h2>High <span>quality</span>services</h2>
              <Cards>
                <Card>
                    <div className="icon">
                        <img src={clock} alt="dd"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Loredsf sd sd sdsfsd.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={diaphragm} alt="dd"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Loredsf sd sd sdsfsd.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={money} alt="dd"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Loredsf sd sd sdsfsd.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={teamwork} alt="dd"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Loredsf sd sd sdsfs.</p>
                </Card>
              </Cards>
          </Description>
        <Image>
            <img src={home2} alt="dd"/>
        </Image>
      </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`
export default ServicesSection;