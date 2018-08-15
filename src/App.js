import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
     person:[
         {name: 'Arpan', age: '33'},
         {name: 'Aryana', age: '3'},
         {name: 'Pratima', age: '30'},
     ],
        showPerson: false
    }

    deletePersonHandler = (personIndex) => {
        console.log(personIndex)
        const persons = this.state.person
        persons.splice(personIndex, 1)
        this.setState({person: persons})
    }

    togglePersonHandler = () => {
        let doesShow = this.state.showPerson
        this.setState({
            showPerson: !doesShow
        })
    }

  render() {
      let persons = null

      if ( this.state.showPerson) {
          persons = (
              <div>
                  {this.state.person.map((p, index) => {
                      return(
                          <Person
                              click = {() => this.deletePersonHandler(index)}
                              name  = {p.name}
                              age   = {p.age}
                          />
                      )

                  })}
              </div>
          )
      }
    return (
      <div className="App">
          <h1>First react app</h1>
          <h1>Can only be nested in side root element ~> div here</h1>
          <button onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
      </div>
    )
}
}

export default App;
