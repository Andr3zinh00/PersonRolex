import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/cardList";
import { CampoBusca } from "./components/campo-busca/campo-busca.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      campoBusca: ''
    }
  }

  handleChange = (event) => {
    this.setState({ campoBusca: event.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState({
          people: users
        }));

  }
  render() {
    const { campoBusca, people } = this.state;
    const filter = people.filter(p =>
      p.name.toLowerCase().includes(campoBusca.toLowerCase())
    );// pesquisa sem case sentitive

    return (
      <div className="App">
        <h1>Buscador de Pessoas </h1>
        <CampoBusca
          placeholder='Procure'
          changer={this.handleChange}
        />
        <CardList pessoas={filter}>
        </CardList>
      </div>
    );
  }
}

export default App;
