import React from 'react'
import '../styles/Article.css'
import randomImage from '../images/article.jpg'

const Article = (props) => {

    var buttonName = props.buttonStyle;
    var output = '';
    var output2 = '';

switch (buttonName) {
case 'business':
output += 'rgb(189, 172, 73)';
output2 += '#333'
break;
case 'technology':
output += 'rgb(128, 0, 109)';
break;
case 'news':
output += 'rgb(41,41,140)';
break;
case 'sport':
output += 'rgb(32, 131, 32)';
break;
default:
output += '#666';
}

    const url = props.article.urlToImage;
    return (
        <div className="article">
            <div style={{background: `url(${props.article.urlToImage === null ? randomImage : url})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="img">
            </div>
            <div className="content">
                <p className="title">{props.article.title}</p>
                <button><a style={{backgroundColor: `${output}`, color: `${output2}`}} target="blank" href={props.article.url}>Przeczytaj artykuł</a></button>
            </div>
        </div>
    )
}

export default Article
