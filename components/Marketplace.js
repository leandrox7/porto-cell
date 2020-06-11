import React from 'react'
import styled from 'styled-components'

const SideNavbar = styled.nav`
 color: #7E6F6F;
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

const Title = styled.div`
padding-top:15px;
padding-bottom:10px;
`
const Filter = styled.div`
padding-bottom:30px;
padding-left:10px;
border-bottom: 1px solid rgba(112, 112, 112, 0.2) ;
`

class Marketplace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            marcas: ['Samsung', 'Apple', 'Xiaomi', 'Sony', 'LG'],
            tela: ['4"', '4.5"', '4.8"', '5"','6"', '6.5"', '+ 6.5"'],
            so: ['Android', 'IOS'],
            armazenamento:['16GB','32GB','64GB', '128GB', '256GB']
                    };
      }
 
    render() {
        return (
            <section>
                
                <SideNavbar>
                <Filter>
                    <Title>Marca</Title>

                    {this.state.marcas.map(item => 
                    (
                    
                    <div>
                        
                        <input key={item} type="checkbox" id={item} name={item} value={item}/>
                        <label key={item} for={item}> {item}</label><br/> 
                    </div>
                   
                    ))}
                </Filter>
                
                <Filter>
                    <Title>Armazenamento</Title>

                    {this.state.armazenamento.map(item => 
                    (
                    
                    <div>
                        
                        <input key={item} type="checkbox" id={item} name={item} value={item}/>
                        <label key={item} for={item}> {item}</label><br/> 
                    </div>
                   
                    ))}
                </Filter>

                <Filter>
                    <Title>Sistema Operacional</Title>

                    {this.state.so.map(item => 
                    (
                    
                    <div>
                        
                        <input key={item} type="checkbox" id={item} name={item} value={item}/>
                        <label key={item} for={item}> {item}</label><br/> 
                    </div>
                   
                    ))}
                </Filter>

                <Filter>
                    <Title>Tela</Title>

                    {this.state.tela.map(item => 
                    (
                    
                    <div>
                        
                        <input key={item} type="checkbox" id={item} name={item} value={item}/>
                        <label key={item} for={item}> {item}</label><br/> 
                    </div>
                   
                    ))}
                </Filter>

                </SideNavbar>
                
                <Box>{this.props.children}</Box>
            </section>

        )
    }
}

export default Marketplace;