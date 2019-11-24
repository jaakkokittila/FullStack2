import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Country from './components/Country.js'

const App = () =>{
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearchChange = (event) =>{
    setSearch(event.target.value)
  }

  const countriesToShow = () => {
    const length = (countries.filter(country => search.toLowerCase() === country.name.substring(0, search.length).toLowerCase())).length
    const filtered = countries.filter(country => search.toLowerCase() === country.name.substring(0, search.length).toLowerCase())
    if(length > 10 ){
      return "Please use a more specific search"
    }else if(length > 1 && length < 10){
      return <ul>{filtered.map(country => <li key={country.name}>{country.name} <button onClick={() => setSearch(country.name)}>Show</button></li>)}</ul>
    }else{
      return filtered.map(country => <Country key={country.name} capital={country.capital}
         name={country.name} population={country.population} languages={country.languages} flag={country.flag}/>)
    }
  } 
  
  useEffect(() =>{
    
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response =>{
        setCountries(response.data)
      
      })
  }, [])

  return(
    <div>
      Search for countries: <input value={search} onChange={handleSearchChange} />
      {countriesToShow()} 
    </div>

  )
}


export default App;
