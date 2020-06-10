import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Card from '../components/Card'
import Data from '../src/marketplace.json'
import Marketplace from '../components/Marketplace'
import axios from 'axios'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { route } from 'next/dist/next-server/server/router'

class MarketplacePage extends React.Component{
    static getInitialProps ({ query: { id } }) {
        return { _id: id }
      }
    
    constructor(props) {
        super(props);
        this.state = { teste: this.props._id,
                        product:[]
                    };
      }

    
    state = {
       
        product:[],
    };

    componentDidMount	(){
        axios.get('https://localhost:5001/api/produto')
        .then(res =>{
            console.log(res);
            
            this.setState({product: res.data});
            console.log(this.state.product[1].name);
        })
    }
    render(){
return (
        <section>
            <Navbar />

            <Container>
               <Marketplace> 
               {this.state.product.map(item => (
           
                <Card key={item} data={item}></Card>
           
          ))}
                 
                   
                   
                     
               </Marketplace>
            
            </Container>
        </section>

    )
    }
    
}

export default MarketplacePage