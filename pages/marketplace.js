import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Card from '../components/Card'
import Data from '../src/marketplace.json'
function HomePage() {
    return (
        <section>
            <Navbar />

            <Container>
            <Card data={Data[1]}></Card>
            </Container>
        </section>

    )
}

export default HomePage