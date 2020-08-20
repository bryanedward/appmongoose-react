import React, { Component } from 'react';
import Contacts from './components/Contacts';
import './App.css'
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
    return (
      <div className="App" style={{
        maxWidth: '100%',
      }}>
          <Contacts contacts = {this.state.contacts} />
      </div>
    )
  }

}

export default App;
