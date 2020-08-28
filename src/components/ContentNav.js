import React, { useState } from 'react'
import Drawers from './Drawers'
import { Hidden } from '@material-ui/core'
import Nav from './Nav';


const ContentNav = () => {


    const [mobile, setMobile] = useState(false)


    const handleDrawable = () => {
        // update state in true and false for open/close the appbar
        setMobile(!mobile)
    }

    return (
        <div>
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
        </div>
    )
}

export default ContentNav