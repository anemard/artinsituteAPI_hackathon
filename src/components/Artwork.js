import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Artwork(props) {

    return (<div className='artworktile'>
        <h3>{props.date_display}</h3>
    </div>)

}

export default Artwork