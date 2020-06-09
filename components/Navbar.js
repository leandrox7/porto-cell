import React from 'react'
import Component from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Background = styled.section`
 background-color: rgba(0, 73, 242, 0.7);
 color: #FFFCFC;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 width:100%;
 max-width:100vw;
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
 float:left;
`;
const BoxLinks = styled.div`
margin-right:200px;
float:right;
color:white;
`

const A = styled.a`
margin-right:20px;`

function Navbar(){
   
        return(
            <Background>
                <Title>PORTO CELL</Title>
                <SubTitle>A loja completa de celulares</SubTitle>
                <BoxLinks>
                <Link href={{ pathname: '/', query: {  } }}>
                   <A>Home</A> 
                </Link>

                <Link href={{ pathname: '/marketplace', query: {  } }}>
                   <A>Marketplace</A> 
                </Link>
                </BoxLinks>
            </Background>
            
        );
    
}

export default Navbar;