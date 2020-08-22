import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Inbox as InboxIcon, Drafts as DraftsIcons } from '@material-ui/icons';
export default function Lists() {

    return (
        <div>
            <Divider />
            <List>
                {['Pagina Principal', 'Mensajeria', 'Contactos'].map((nameOption, index) => (
                    <ListItem key={nameOption}>
                        <ListItemIcon>{
                            index % 2 === 0 ? <InboxIcon /> : <DraftsIcons />}
                        </ListItemIcon>
                        <ListItemText primary={nameOption} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
} 