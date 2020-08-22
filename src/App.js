import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import Lists from './components/List';
import themesApp from './styles/AppStyle';

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
      <div >
        <Nav />
        <Lists/>
        <Contacts style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}
          contacts={this.state.contacts} />
      </div>
    )
  }

}

export default App;
