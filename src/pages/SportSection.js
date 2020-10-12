import React from 'react'
import '../styles/SportSection.css'
import Article from '../components/Article'
import Preloader from '../components/Preloader'

const SportSection = (props) => {

    const articles = props.articles.map(item => (
        <Article article={item} key={item.title} buttonStyle={props.buttonStyle}/>
    ))
    return (
        <>
            <h2 className="sport">SPORT</h2>
            <div className="container">
                {props.active ? articles : <Preloader/> }
            </div>
        </>
    )
}

export default SportSection
