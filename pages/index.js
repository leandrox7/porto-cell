import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'


function HomePage() {
    return <div>
        <Head>
            <title>Porto Cell</title>
        </Head>
       <section>
            <Navbar/>
       </section>
    </div>
  }
  
  export default HomePage