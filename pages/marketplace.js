import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Card from '../components/Card'
import Data from '../src/marketplace.json'
import Marketplace from '../components/Marketplace'

function MarketplacePage() {
    return (
        <section>
            <Navbar />

            <Container>
               <Marketplace> 
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>
                   <Card data={Data[1]}></Card>

               
               </Marketplace>
            
            </Container>
        </section>

    )
}

export default MarketplacePage