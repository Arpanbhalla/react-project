import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
     person:[
         {name: 'Arpan', age: '33'},
         {name: 'Aryana', age: '3'},
         {name: 'Pratima', age: '30'},
     ]
    }

    switchNameHandler = () => {
        this.setState({
            person:[
                {name: 'Arpan!!!', age: '333'},
                {name: 'Aryana', age: '3'},
                {name: 'Pratima', age: '30'},
            ]
        })

    }

  render() {
    return (
      <div className="App">
          <h1>First react app</h1>
          <h1>Can only be nested in side root element ~> div here</h1>
          <button onClick={this.switchNameHandler}>Switch Name!</button>
          <Person
              click = {this.switchNameHandler}
              name = {this.state.person[0].name}
              age = {this.state.person[0].age}/>
          <Person
              name = {this.state.person[1].name}
              age = {this.state.person[1].age}>
              My hobby is: troubling daddy
          </Person>
          <Person
              name = {this.state.person[2].name}
              age = {this.state.person[2].age}/>
      </div>
    )
  }
}

export default App;
