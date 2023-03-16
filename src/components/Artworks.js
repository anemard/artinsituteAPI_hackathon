import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'

function Artworks() {
    const [artworks, setArtworks] = useState([])
    const [imgConfig, setImgConfig] = useState("")
    const [pageNum, setPageNum] = useState(1)

    function previous() {
        getData(pageNum-1)
        setPageNum(pageNum-1)
    }

    function next() {
        getData(pageNum+1)
        setPageNum(pageNum+1)
    }

    function getData(num) {
        Axios.get(`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id,main_reference_number,/page=${num}&limit=100`).then((res) => {
            setArtworks(res.data.data)
            console.log(`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id,main_reference_number,/page=${num}&limit=100`)
            console.log('num', num)
            setImgConfig(res.data.config.iiif_url)
        })
    }

    console.log(artworks)
    console.log("pagenum", pageNum)

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <div><Link to='/'>Home</Link></div>
            <div>
                {(pageNum > 1) ? (<span><button onClick={previous}>Previous</button> | <button onClick={next}>Next</button></span>) : (<button onClick={next}>Next</button>) } 
            </div>
            <div className='allArtworks'>
            {artworks.map(artwork => (
                <div key={artwork.id} className='artworktile'>
                    <h1 className='artworkTitle'>{artwork.title}</h1>
                    {(artwork.image_id ? (<img src={`${imgConfig}/${artwork.image_id}/full/843,/0/default.jpg`} className="imgThumb"/>) : 'No image')}
                    <p><Link to={`artwork/${artwork.id}`}>view more</Link></p>
                </div>
            ))}
            </div>
        </div>
        )

}

export default Artworks