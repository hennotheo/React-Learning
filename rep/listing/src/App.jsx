import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonTable from "./component/PersonTable.jsx";

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}

const [persons, setPersons] = useState(() => [
    new Person("John", "Doe"),
    new Person("Jane", "Doe"),
    new Person("Alice", "Smith"),
    new Person("Bob", "Smith"),
]);

const personRender = () => {
    return PersonTable({data: persons});
}

function App() {
    const add = () => {
        setPersons(prevPersons => [...prevPersons, new Person("kk", "ee")]);
        console.log(persons.length + 1);
    }

    return (
        <>
            {personRender()}
            <PersonTable data={persons}/>
            <button onClick={() => add()}>ee</button>
        </>
    )
}

export default App