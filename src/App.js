import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './util.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './components/Gallery.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
  }

  search() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let {items} = json;
        this.setState({items})
      }); // TODO: Add a catch method here in case the API call fails
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book Finder</h1>
        </header>
        <div className="container main-content">
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
