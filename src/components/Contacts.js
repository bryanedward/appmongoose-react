import React from 'react'


const Contacts = ({ contacts }) => {
    return (
        <div>
            {contacts.map((item)=>(
                <div key={item._id}>
                    <small>{item.first_name} - {item.last_name} - {item.email}</small> 
                </div>
            ))}
        </div>
    )
}

export default Contacts