import React, { Component } from 'react';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {

  state = {
    contacts: []
  }


  componentDidMount() {
    // query to database mongodatabase
    fetch('http://localhost:4000')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          contacts: data
        })
      })
      .catch(console.log)
  }


  render() {
    console.log(this.state.contacts)
    return (
      <div className="App">
        <header className="App-header">
          <Contacts contacts = {this.state.contacts} />
        </header>
      </div>
    )
  }

}

export default App;
