import React from 'react'
import CardStyled from '../styles/ContactStyle'

const Contacts = ({ contacts }) => {
    return (
        <CardStyled.Card>
            {contacts.map((item) => (
                <CardStyled.itemCard key={item._id}>
                    <img src={item.photo} alt={item.first_name}/>
                    <CardStyled.detailsCard>
                        {item.first_name} 
                        {item.last_name}
                    </CardStyled.detailsCard>
                    <CardStyled.detailsCard>
                        {item.email}
                    </CardStyled.detailsCard>
                </CardStyled.itemCard>
            ))}
        </CardStyled.Card>
    )
}

export default Contacts