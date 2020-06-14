import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Modal from '../components/Modal'


function HomePage() {
    return (
        <section>
            <Head>
                <title>Porto Cell</title>
            </Head>
            <Navbar />

            <Container>
            <div>teste</div>
                <Modal/>    
               
               
               
        </Container>
        </section>

    )
}

export default HomePage