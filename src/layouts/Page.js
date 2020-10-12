import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import SportSection from '../pages/SportSection'
import BussinesSection from '../pages/BussinesSection'
import TechnologySection from '../pages/TechnologySection'
import ErrorPage from '../pages/ErrorPage'
import '../styles/Page.css'

 const Page = (props) => {

    
    return (
        <>
        <Switch>
            <Route path="/" exact component={() => <Homepage  active={props.active} articles={props.articles} buttonStyle='news'/>}/>
            <Route path="/sport" component={() => <SportSection active={props.activeSport} articles={props.sportArticles} buttonStyle='sport'/>}/>
            <Route path="/biznes" component={() => <BussinesSection active={props.activeBussines} articles={props.bussinesArticles} buttonStyle='business'/>}/>
            <Route path="/technologia" component={() => <TechnologySection active={props.activeTechnology} articles={props.technologyArticles} buttonStyle='technology'/>}/>
            <Route component={ErrorPage}/>
        </Switch>
        </>
    )
}

export default Page;