const Persons = ({ persons, search, handleDelete }) => {

    let numbersObject = persons

    if (search !== '') {
        numbersObject = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    }

    console.log('persons', persons)
    // console.log('persons', persons)

    return numbersObject.map((person) => 
    <div key={person.name}>{person.name} {person.number}
    <button onClick={() => handleDelete(person)}>delete</button>
    </div>)
}

export default Persons