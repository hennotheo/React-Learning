function PersonRow({id, person}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{person.name}</td>
            <td>{person.lastName}</td>
        </tr>
    )
}

export default PersonRow