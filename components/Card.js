import React from 'react'
import Component from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Box = styled.div`
 width:206px;
 height:350px;
 margin: 50px 10px 10px 10px;
 padding: 10px 10px 10px 10px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color:#707070;
 display:inline-block;
 
 :hover  {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Name = styled.div`

  font-size:14px;
 
`;

const Price = styled.div`
  font-size:20px;
  margin-top:25px;
  margin-bottom:2px;  
`;

const SubPrice = styled.div`
  font-size:12px;
`;

const Image = styled.img`
width:200px;
height:210px;
`

class Card extends React.Component {
  render() {

    return (


      <Link href={{ pathname: '/product', query: { id: this.props.data.id } }}>
        <Box id={this.props.data.id}>
          <Image src={this.props.data.image} />
          <Name>{this.props.data.name}</Name>
          <Price>R$ {this.props.data.price}</Price>
          <SubPrice>12x de {this.props.data.subprice} sem juros</SubPrice>
        </Box>
      </Link>


    )
  }


}
export default Card;