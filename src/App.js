import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';


class App extends Component {
  state = {
    persons: [
      {id: "gdgdfd", name: "Chima", age: 25},
      {id: "gdgd",name:"Stephanie", age: 26},
      {id: "gddfd",name: "Odera", age: 22}, 
      {id: "gfd",name: "Kamsi", age:23}
    ],
    showPersons:false
  }
 

  switchNameHandler= (newName) =>{
    // console.log('Was clicked')
    // this.state.persons[0].name= "Maximillian"
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name:"Stephanie", age: 30},
        {name: "Odera", age: 22}
      ]
    })
  }
  deletePersonHandler=(personIndex)=>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})

  }
  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] =person

    this.setState({
     persons:persons
    })
  }
  
  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})

  }


  render(){
    const style= {
      backgroundColor:"white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px", 
      cursor: "pointer"
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            click = {()=> this.deletePersonHandler(person)}
            name ={person.name} 
            age = {person.age}
            key = {person.id}
            changed = {(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
         </div>

      )
    }
    return (
      <div className="App">
      <h1>Hi i'm a React App</h1>
      <p>This is really working</p>

      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons 
      </button>
      {persons}
      </div>
     )

    // return React.createElement('div', {className:'App'},React.createElement('h1',  null, 'Hi i\'m a React App') )
  }
}

export default App;
