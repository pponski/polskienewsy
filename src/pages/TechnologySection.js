import React from 'react'
import '../styles/TechnologySection.css'
import Article from  '../components/Article'
import Preloader from '../components/Preloader'



const TechnologySection = (props) => {

    const articles = props.articles.map(item => (
        <Article article={item} key={item.title} buttonStyle={props.buttonStyle}/>
    ))


    return (
        <>
            <h2 className="technology">TECHNOLOGIA</h2>
            <div className="container">
                {props.active ? articles : <Preloader/> }
            </div>
        </>
    )
}

export default TechnologySection

