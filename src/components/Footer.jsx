import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    bottom:0;
    left:0;
    height:90px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#8793;
`;

const FooterItem = styled.span `
    text-decoration:none;
    font-size:16px;
    color:#000;
    font-weight:bold;
`

// import { Container } from './styles';

export default function footer() {
    return(
        <React.Fragment>
            <Footer>
                <FooterItem>Aula sobre styled components</FooterItem>
            </Footer>
        </React.Fragment>
    );
};