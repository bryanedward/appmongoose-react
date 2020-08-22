import React from 'react'
import CardStyled from '../styles/ContactStyle'
import { Button } from '@material-ui/core';

const Contacts = ({ contacts }) => {
    return (
        <CardStyled.Card >
            {contacts.map((item) => (
                <CardStyled.itemCard key={item._id}>
                    <img
                        style={{
                            display: 'block',
                            margin: 'auto'
                        }}
                        src={item.photo}
                        alt={item.first_name} />
                    <CardStyled.detailsCard>
                        {item.first_name}
                        {item.last_name}
                    </CardStyled.detailsCard>
                    <CardStyled.detailsCard>
                        {item.email}
                    </CardStyled.detailsCard>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            display: 'block',
                            margin: 'auto'
                        }}>Accionar</Button>
                </CardStyled.itemCard>
            ))}
        </CardStyled.Card>
    )
}

export default Contacts