import {useState} from "react";

function Form({ submitCallback }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name} Last Name: ${lastName} Age: ${mail}`);
        submitCallback({name, lastName, mail});
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "200px"}}>
            <label htmlFor="name">Name:</label>
            <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="lastName">Last Name:</label>
            <input required type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="mail">mail:</label>
            <input required type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;