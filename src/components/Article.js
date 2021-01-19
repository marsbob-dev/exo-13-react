import React,{Component,Fragment} from 'react';

class Article extends Component{
    render(){
        return(
            <div>
               <h1>{this.props.titre}</h1>
               <p>{this.props.texte}</p>
               <span>{this.props.auteur}</span>
            </div>
            )
        }
}

export default Article;