import React, {useState} from 'react'
import SearchList from './SearchList'

export default function Search({details}) {

    const [searchField, setSearchField] = useState("");

    const filteredPersons = details.filter(
        person => {
          return (
            person.name.toLowerCase().includes(searchField.toLowerCase()) ||
            person.email.toLowerCase().includes(searchField.toLowerCase())
          );
        }
      );
    
      const handleChange = e => {
        setSearchField(e.target.value);
      };
    
      function searchList() {
        return (                   
          <SearchList filteredPersons={filteredPersons} />          
        );
      }    

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">React Search App</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  )
}
