import React from 'react'
import Component from 'react'
import styled from 'styled-components'


const Box = styled.div`
 width:90vw;
 max-width:1200px;
 margin-left:auto;
 margin-right:auto;
 display: contents;

`;


class Container extends React.Component {
    render() {
      return <Box>{this.props.children}</Box>
    }
  }

export default Container;