import React, { Component } from 'react';
import './App.css';
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

        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
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
          style.backgroundColor = 'red'
          style[':hover'] = {
              backgroundColor: 'purple',
              color: 'white'
          }
      }

      let classes = []
      if (this.state.person.length <= 2) {
          classes.push('red')
      }

      if (this.state.person.length <= 1) {
            classes.push('bold')
      }
    return (
      <div className="App">
          <h1>First react app</h1>
          <p className={classes.join(' ')} >Can only be nested in side root element ~> div here</p>
          <button style={style}
              onClick={this.togglePersonHandler}>
              Toggle Person
          </button>
          {persons}
      </div>
    )
}
}

export default App;
