import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import '../styles/App.css'
import Navigation from './Navigation'
import Calendar from './Calendar'
import Weather from './Weather'
import Page from './Page'


const articlesAPI = 'http://newsapi.org/v2/top-headlines?country=pl&apiKey=32694051b9e1439dabf2db11c16f10ae';
const sportAPI = 'http://newsapi.org/v2/top-headlines?country=pl&category=sports&apiKey=32694051b9e1439dabf2db11c16f10ae';
const bussinesAPI = 'http://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=32694051b9e1439dabf2db11c16f10ae';
const technologyAPI = 'http://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=32694051b9e1439dabf2db11c16f10ae';


class App extends Component {
  state = { 
    articles: [],
    sportArticles: [],
    bussinesArticles: [],
    technologyArticles: [],
    isLoaded: false,
    isLoadedSport: false,
    isLoadedBussines: false,
    isLoadedTechnology: false
   }

   componentDidMount = () => {
    fetch(articlesAPI)
    .then(response => response.json())
    .then(data => {
      this.setState({
        articles: data.articles,
        isLoaded: true
      })
    })

    fetch(sportAPI)
    .then(response => response.json())
    .then(data => {
      this.setState({
        sportArticles: data.articles,
        isLoadedSport: true
      })
    })

    fetch(bussinesAPI)
    .then(response => response.json())
    .then(data => {
      this.setState({
        bussinesArticles: data.articles,
        isLoadedBussines: true
      })
    })

    fetch(technologyAPI)
    .then(response => response.json())
    .then(data => {
      this.setState({
        technologyArticles: data.articles,
        isLoadedTechnology: true
      })
    })
    }

  
  render() { 
    return ( 
      <Router>
        <>
    <div className="navigation">{<Navigation/>}</div>
          <main>
            <aside>
              <div className="calendar">{<Calendar/>}</div>
              <div className="weather">{<Weather/>}</div>
            </aside>
            <div className="page">
             {/* {this.state.isLoaded ? <Page articles={this.state.articles}/> : <Preloader/>} */}
             {<Page 
              active={this.state.isLoaded}
              articles={this.state.articles}
              activeSport={this.state.isLoadedSport}
              sportArticles={this.state.sportArticles}
              activeBussines={this.state.isLoadedBussines}
              bussinesArticles={this.state.bussinesArticles}
              activeTechnology={this.state.isLoadedTechnology}
              technologyArticles={this.state.technologyArticles}/>}
            </div>
          </main>
        </>
      </Router>
    );
  }
}
 
export default App;