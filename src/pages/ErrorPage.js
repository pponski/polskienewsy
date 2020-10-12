import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const warningIcon = <FontAwesomeIcon style={{fontSize: '150px', color: 'darkorange'}} icon={faExclamationTriangle}/>
const ErrorPage = () => {
    return (
            <p style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems: "center", paddingBottom: 100, fontSize: 30, fontStyle: 'italic', fontWeight: 600 , color: '#333'}}>{warningIcon}<br/>Strona o podanym adresie URL nie istnieje!</p>
    )
}

export default ErrorPage
