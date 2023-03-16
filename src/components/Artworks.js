import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'

function Artworks() {
    const [artworks, setArtworks] = useState([])
    const [imgConfig, setImgConfig] = useState("")

    function getData() {
        Axios.get("https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,image_id").then((res) => {
            setArtworks(res.data.data)
            setImgConfig(res.data.config.iiif_url)
        })
    }

    console.log("1", artworks)

    useEffect(() => {
        getData();
    }, [])

    console.log("2", artworks)
    console.log(imgConfig)

    return (
        <div>
            {artworks.map(artwork => (
                <div key={artwork.id} className='artworktile'>
                    <h1>{artwork.title}</h1>
                    {(artwork.image_id ? (<img src={`${imgConfig}/${artwork.image_id}/full/843,/0/default.jpg`} className="imgThumb"/>) : 'No image')}
                    <p><Link to={`/artwork/${artwork.id}`}>view more</Link></p>
                </div>
            ))}
        </div>
        )

}

export default Artworks