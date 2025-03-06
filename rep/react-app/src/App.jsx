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

const persons = [
    new Person("John", "Doe"),
    new Person("Jane", "Doe"),
    new Person("Alice", "Smith"),
    new Person("Bob", "Smith"),
]

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <PersonTable data={persons}/>
        </>
    )
}

export default App