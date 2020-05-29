import React from 'react'
import Component from 'react'
import styled from 'styled-components'

const Background = styled.section`
 background-color: #0049F2;
 color: #FFFCFC;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 width:100%;
 height:100px;
`;

const Box = styled.div`
 width:90vw;
 max-width:1200px;
 margin-left:auto;
 margin-right:auto;
`;


class Container extends React.Component {
    render() {
      return <Box>{this.props.children}</Box>
    }
  }

export default Container;