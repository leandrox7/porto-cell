import React from 'react'
import styled from 'styled-components'

const SideNavbar = styled.nav`
 color: #FFFCFC;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 width:19%;
 max-width:400px;
 height:100vh;
 float:left;

 border-right: 1px solid rgba(112, 112, 112, 0.2) ;
`;

const Box = styled.div`
 max-width:80%;
 padding-left:10px;

 height:auto;
 float:left;

`;


class Marketplace extends React.Component {
    render() {
        return (
            <div>
                <SideNavbar>
                    side navbar yrtyrs
                </SideNavbar>
                <Box>{this.props.children}</Box>
            </div>

        )
    }
}

export default Marketplace;