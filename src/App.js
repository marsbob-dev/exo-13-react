 import './App.css';
import React,{Component} from 'react';
import Article from './components/Article';

class App extends Component {
  state = {
    articles: [
      {titre:"J'aime les nems", texte:"Les nems, c'est délicieux. Surtout ceux au porc.", auteur:"Me"},
      {titre:"J'aime aussi les pizzas", texte:"Les pizzas, c'est très bon aussi. Surtout celles avec plein de fromage", auteur:"Also me"},
      {titre:"Je préfère les céréales", texte:"Surtout les smacks, trésor ou classiques c'est le bonheur.", auteur:"And me"}
    ]
  }
  render(){
    return (
      <div className="App">
        {this.state.articles.map((elem,index) => <Article key={index} titre={elem.titre} texte={elem.texte} auteur={elem.auteur} />)}
      </div>
    ) 
  }
}

export default App;
