import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    return (<div><Link to={`/artworks`}><h1>Artworks</h1></Link></div>)

}

export default Home