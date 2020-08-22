import React from 'react'
import withWidth from '@material-ui/core/withWidth';

function Hidden (props) {
    return <div>{ `Current width: ${props.width}` } </div>
}

export default withWidth()(Hidden)