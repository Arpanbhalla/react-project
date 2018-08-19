import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
      let btnClass = ''

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

          btnClass = classes.Red
      }

      const AssignedClasses = []
      if (this.state.person.length <= 2) {
          AssignedClasses.push(classes.red)
      }

      if (this.state.person.length <= 1) {
          AssignedClasses.push(classes.bold)
      }
    return (
      <div className={classes.App}>
          <h1>First react app</h1>
          <p className={AssignedClasses.join(' ')} >Can only be nested in side root element ~> div here</p>
          <button
              className = {btnClass}
              onClick   = {this.togglePersonHandler}>
              Toggle Person
          </button>
          {persons}
      </div>
    )
}
}

export default App;
