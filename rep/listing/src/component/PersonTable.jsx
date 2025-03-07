import PersonRow from "./PersonRow.jsx";

function PersonTable({data}) {
    const personTable = data.map((person, index) => (
        <PersonRow key={index} person={person} id={index} />
    ));

    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
            </tr>
            </thead>
            <tbody>
            {personTable}
            </tbody>
        </table>
    )
}

export default PersonTable