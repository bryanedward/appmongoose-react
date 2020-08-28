import React, {useState, useEffect} from 'react'
import Contacts from './Contacts';
import themeApp from '../styles/AppStyle'
import ContentNav from './ContentNav'


const Home = () => {
    const [allow, setAllow] = useState([]);
    const theme = themeApp();

    useEffect(() => {
        // queey in the database
        fetch('http://localhost:4500')
            .then(res => res.json())
            .then((data) => {
                setAllow(data)
            })
            .catch(console.log)
    }, [])


    return (
        <div className={theme.root}>
            <ContentNav />
            <div className={theme.content}>
                <div className={theme.toolbar} />
                <Contacts contacts={allow} />
            </div>
        </div>
    )
}

export default Home