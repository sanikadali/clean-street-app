import React from 'react'
import Header from '../components/Header/Header'

function Home() {
  return (
    <div>
        <Header/>
        <div className='main'>
        <h1>Clean Street</h1>
        <p>
          Report and track civic issues like garbage, potholes, and water leaks.
        </p>
        </div>
    </div>
  )
}

export default Home
