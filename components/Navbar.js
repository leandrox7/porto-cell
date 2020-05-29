import React from 'react'
import Component from 'react'
import styled from 'styled-components'

const Background = styled.section`
 background-color: #0049F2;
 color: #FFFCFC;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 width:100%;
 height:100px;
 padding-left:10vw;
 padding-top:10px;
`;

const Title = styled.h2`
 font-size:2.0rem;
 margin-block-start: 0.43em;
 margin-block-end: 0.23em;
`;

const SubTitle = styled.div`
 font-size:1rem;
`;

function Navbar(){
   
        return(
            <Background>
                <Title>PORTO CELL</Title>
                <SubTitle>A loja completa de celulares</SubTitle>
            </Background>
            
        );
    
}

export default Navbar;