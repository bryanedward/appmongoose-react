import React from 'react'
import CardStyled from '../styles/ContactStyle'
import { Button } from '@material-ui/core';

const Contacts = ({ contacts }) => {
    return (
        <CardStyled.Card style={{
            border: '1px solid #c3c3c3',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center'
        }}>
            {contacts.map((item) => (
                <CardStyled.itemCard key={item._id}>
                    <img src={item.photo} alt={item.first_name} />
                    <CardStyled.detailsCard>
                        {item.first_name}
                        {item.last_name}
                    </CardStyled.detailsCard>
                    <CardStyled.detailsCard>
                        {item.email}
                    </CardStyled.detailsCard>
                    <Button variant="contained"
                        color="primary"
                        >Accionar</Button>
                </CardStyled.itemCard>
            ))}
        </CardStyled.Card>
    )
}

export default Contacts