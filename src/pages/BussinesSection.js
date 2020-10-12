import React from 'react'
import '../styles/BussinesSection.css'
import Article from  '../components/Article'
import Preloader from '../components/Preloader'


const BussinesSection = (props) => {
    const articles = props.articles.map(item => (
        <Article article={item} key={item.title} buttonStyle={props.buttonStyle}/>
    ))
    return (
        <>
            <h2 className="bussines">BIZNES</h2>
            <div className="container">
                {props.active ? articles : <Preloader/> }
            </div>
        </>
    )
}

export default BussinesSection

