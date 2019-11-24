import React from 'react'


const Country = (props) => (
    <div>
        <p><b>{props.name}</b></p>
        <p>Capital: {props.capital}</p>
        <p>Population: {props.population}</p>
        <p><b>Languages</b></p>
        
        <ul>{props.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
        <img src={props.flag} />
    </div>
)

export default Country