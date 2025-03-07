import {useState} from "react";

function Contacts({contact}) {

    const personTable = contact.map((person) => (
        <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.lastName}</td>
            <td>{person.mail}</td>
        </tr>
    ));

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Mail</th>
                </tr>
                </thead>
                <tbody>
                {personTable}
                </tbody>
            </table>
        </div>
    );
}

export default Contacts;