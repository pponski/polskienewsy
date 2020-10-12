import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import '../styles/Preloader.css'

const loadIcon = <FontAwesomeIcon className="preloader" style={{color: '#333', fontSize: 80}} icon={faSpinner} />
const Preloader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',alignSelf: "center"}}>
            {loadIcon}
        </div>
    )
}

export default Preloader
