import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import themeApp from './styles/AppStyle'
import Drawers from './components/Drawers'

const App = () => {

  const [allow, setAllow] = useState([]);

  useEffect(() => {
    // consultar base de datos
    fetch('http://localhost:4000')
      .then(res => res.json())
      .then((data) => {
        setAllow(data)
      })
      .catch(console.log)
  }, [])

  const theme = themeApp();

  return (
    <div className={theme.root}>
      <Nav />
      <Drawers />
      <div className={theme.content}>
        <div className={theme.toolbar} />
        <Contacts
          contacts={allow} />
      </div>

    </div>
  )

}

export default App;
