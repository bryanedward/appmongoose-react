import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import themeApp from './styles/AppStyle'
import Drawers from './components/Drawers'
import { Hidden } from '@material-ui/core'

const App = () => {

  const [allow, setAllow] = useState([]);
  const [mobile, setMobile] = useState(false)
  const theme = themeApp();
  const handleDrawable = () => {
    // update state in true and false for open/close the appbar
    setMobile(!mobile)
  }
  useEffect(() => {
    // queey in the database
    fetch('http://localhost:4000')
      .then(res => res.json())
      .then((data) => {
        setAllow(data)
      })
      .catch(console.log)
  }, [])

  return (
    <div className={theme.root}>
      <Nav methodOpen={handleDrawable} />
      <Hidden xsDown>
        <Drawers
          variant="permanent"
          open={true} />
      </Hidden>
      <Hidden smUp>
        <Drawers
          variant="temporary"
          open={mobile}
          close={handleDrawable} />
      </Hidden>
      <div className={theme.content}>
        <div className={theme.toolbar} />
        <Contacts contacts={allow} />
      </div>
    </div>
  )

}

export default App;
