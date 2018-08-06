import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from '../../components/Gallery/Gallery';

class App extends Component {
  state = {
    query: '',
    items: []
  };

  search = () => {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        const {items} = json;
        this.setState({items})
      })
      .catch(error => console.log(error));
  }

  render() {
    const style = {
      padding: '2em 0'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Book Finder</h1>
        </header>
        <div className="container" style={style}>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Search for a book"
              onChange={ event => this.setState({ query: event.target.value }) }
              onKeyPress={ event => {
                if ('Enter' === event.key) {
                  this.search();
                }
              }} />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <Gallery items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
