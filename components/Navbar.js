import React from 'react'
import Component from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Container from '../components/Container'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Background = styled.section`
 background-color: #e60014;
 color: #FFFCFC;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 max-width:100vw;
 height:auto;
`;
const Barra2 = styled.section`
 color: #7E6F6F;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 border-bottom: 1px solid rgba(112, 112, 112, 0.2) ;
 max-width:100vw;
 height:40px;
 padding-left:10vw;
 padding-top:10px;
 margin-bottom:20px;
`;
const Line = styled.div`
display:block;
justify-content:center;
justify-items:center;
padding-top:10px;`
const Title = styled.h2`
 font-size:2.5rem;
 margin-block-start: 0.43em;
 margin-block-end: 0.23em;
 padding-left:20%;
`;
const SubTitle = styled.div`
 font-size:1rem;
 padding-left:20%;

`;
const BoxIcons = styled.div`
padding-left:30%;
color:white;
`
const BoxLinks = styled.div`
margin-left:auto;
margin-right:auto;
justify-content:center;
justify-items:center;
padding-top:10px;
position:relative;
display:table;

`
const BoxLeft = styled.div`
width:50%;
display:inline-block;
`
const BoxRigth = styled.div`
width:50%;
display:inline-block;
`
const Span = styled.span`
padding-left:20px;
font-size:0.7rem;

`
const A = styled.a`
margin-right:40px;

`


function Navbar() {

    return (
        <section>
            <Background>
                <Container>
                    <BoxLeft>
                    <Title>PORTO CELL</Title>
                </BoxLeft>
                <BoxRigth>
                    <BoxIcons>
                       
                        <Line>
                            <AccountCircleIcon fontSize='large' />
                            <Span>olá, faça seu login ou cadastre-se</Span>
                        </Line> 

                        <Line>
                            <ShoppingBasketIcon fontSize='large' />
                            <Span>Minha Sacola</Span>
                        </Line>

                    </BoxIcons>

                </BoxRigth>
                </Container>
                


            </Background>

            <Barra2>
                <Container>
                    <BoxLinks>
                        <Link href={{ pathname: '/', query: {} }}>
                            <A>Home</A>
                        </Link>

                        <Link href={{ pathname: '/marketplace', query: {} }}>
                            <A>Marketplace</A>
                        </Link>

                        <Link href={{ pathname: '/marketplace', query: {} }}>
                            <A>Promoções</A>
                        </Link>

                        <Link href={{ pathname: '/marketplace', query: {} }}>
                            <A>Quem Somos</A>
                        </Link>
                        <Link href={{ pathname: '/marketplace', query: {} }}>
                            <A>Avaliação de Seminovo</A>
                        </Link>
                       


                    </BoxLinks>
                </Container>

            </Barra2>
        </section>


    );

}

export default Navbar;