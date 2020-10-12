import React from 'react'
import '../styles/Homepage.css'
import Preloader from '../components/Preloader'
import Article from '../components/Article'


const Homepage = (props) => {

    const articles = props.articles.map(item => (
        <Article article={item} key={item.title} buttonStyle={props.buttonStyle}/>
    ))
    return (
        <>
            <h2 className="homepage">WIADOMOŚCI</h2>
            <div className="container">
                {props.active ? articles : <Preloader/> }
            </div>
        </>
    )
}

export default Homepage
