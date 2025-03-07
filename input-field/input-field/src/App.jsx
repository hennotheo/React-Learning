import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form';
import Contacts from './components/Contacts';

function App() {
    const [contacts, setContacts] = useState([]);

    const formSubmit = (contact) => {
        setContacts([...contacts, {
            id: contacts.length + 1,
            name: contact.name,
            lastName: contact.lastName,
            mail: contact.mail
        }]);
    }

    return (
        <>
            <h1>Vite + React</h1>
            <Form submitCallback={formSubmit}/>
            <Contacts contact={contacts}/>
        </>
    )
}

export default App
