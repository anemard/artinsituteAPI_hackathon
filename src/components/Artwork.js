import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from "axios"

function Artwork() {
    const { id } = useParams();
    const [artwork, setArtwork] = useState([])
    console.log(id)

    function getData(num) {
        Axios.get(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,image_id,main_reference_number`).then((res) => {
            setArtwork(res.data.data)
        })
    }
    console.log(artwork)

    useEffect(() => {
        getData();
    }, [])

    return (<div className='artwork'>
        
        {(artwork.image_id) ? (<img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} />) : ("No Image")}
        <h1>Title: {artwork.title}</h1>
        <h3>By: {artwork.artist_display}</h3>
        <h3>Date: {artwork.date_display}</h3>
    </div>)

}

export default Artwork