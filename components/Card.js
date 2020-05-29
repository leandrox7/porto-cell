import React from 'react'
import Component from 'react'
import styled from 'styled-components'


const Box = styled.div`
 width:300px;
 margin-left:10px;
 margin-right:10px;
 display:inline-block;
`;

const Name = styled.div`
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Price = styled.div`
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const SubPrice = styled.div`
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Image = styled.img`
width:300px;
height:auto;
`

class Card extends React.Component {
    render() {
        
            return (

                <Box id={this.props.data.id}>
                    <Image src={this.props.data.image} />
                    <Name>{this.props.data.name}</Name>
                    <Price>R$ {this.props.data.price}</Price>
                    <SubPrice>12x de {this.props.data.subprice} sem juros</SubPrice>
                </Box>
            )
        }
        
    
}
export default Card;