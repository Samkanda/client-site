import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import logo from '../img/logo3.png';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'

const Navb = () => {
    return(
        <StyledNav>            
            <ul>
                <li>
                    <Link id = "aa" to ="/">Home</Link>
                </li>
                <li>
                    <Link id = "aa" to ="/work">Films</Link>
                </li>
               
                <img to="/" id = "logo" src={logo} alt="dd"/>
                
                <li>
                    <Link id = "aa" to ="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link id = "aa" to ="/contact">Contact</Link>
                </li>
            </ul>
        </StyledNav>
        
    )
};

const StyledNav = styled.nav`
    min-height: 7vh;
    align-items: center;
    padding: 1.8rem 2rem 0rem 0rem;
    background: #ded5cc;
    
    a {
        color: black;
        text-decoration: none;
        justify-content: center;
        /* @media (max-width: 1000px) {
        display: none;
        } */
    }
    ul{
        display: flex;
        list-style: none;
        
        padding-left: 15rem;
        padding-right: 15rem;
        justify-content: space-evenly;
        @media (max-width: 1300px) {
            padding:0rem;
        }
    }
    #logo{
        margin-left: 5rem;
        width: 25rem;
        padding-bottom: 1rem;
        @media (max-width: 1000px) {
    display: none;
}
    }
    li{
        padding-top: 1rem;
    }
    #aa{
        font-size: 1.5rem;
    }
`;

export default Navb;