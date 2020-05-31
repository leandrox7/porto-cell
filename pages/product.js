import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Data from '../src/product.json'
import styled from 'styled-components'


const Image = styled.img`
 width:600px;
 height:auto;

`;
const Name = styled.div`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:rgba(112,112,112,0.3);
font-size:35px;
`;
const Payment = styled.div`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:#707070;
font-size:40px;
display:inline-block;
margin-top:20px;
`;
const Subprice = styled.div`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:rgba(112,112,112,0.6);
font-size:15px;
display:block;

`;
const Information = styled.h2`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:rgba(112,112,112,0.6);
font-size:35px;
`;

const Button = styled.button`
background-color:#306BF4;
width:200px;
height:50px;
border:none;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:rgb(255,255,255);
font-size:30px;
padding: 15px 32px;
text-align: center;
text-decoration: none;
border-radius: 2px solid;
padding: 10px 10px 50px 10px;
display:inline-block;
float:right;
margin-top:30px;
margin-right:80px;
:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
};

:focus{
    border: none;
}

:active {
  background-color:#306BF5;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

`;
const Description = styled.div`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:#707070;
font-size:15px;
max-width:90%;
text-align:justify;
display:block;
margin-bottom:10vh;
`;

const BoxLeft = styled.div`
margin-top:10vh;
display:inline-block;
`;

const BoxRight = styled.div`
display:inline-block;
max-width:600px;
vertical-align: top;
padding-top:150px;

`;

const BoxBottom = styled.div`

display:inline-block;
margin-top:100px;
`;

function ProductPage() {
    return (
        <section>
            <Navbar />
            <Container>
                <BoxLeft>
                    <Image src={Data.image}></Image>
                </BoxLeft>

                <BoxRight>
                    <Name>{Data.name}</Name>
                    <Payment>R$ {Data.price}</Payment>
                    <Button>Comprar</Button>
                    <Subprice>12x de {Data.subprice} sem juros</Subprice>
                    
                </BoxRight>

                <BoxBottom>
                    <Information>Informações do Produto</Information>
                    <Description>
                        {Data.description}
                    </Description>
                </BoxBottom>
            </Container>

        </section>
    )
}

export default ProductPage