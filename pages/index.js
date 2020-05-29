import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'

function HomePage() {
    return (
        <section>
            <Head>
                <title>Porto Cell</title>
            </Head>
            <Navbar />

            <Container>
            <div>teste</div>
            </Container>
        </section>

    )
}

export default HomePage