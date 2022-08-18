import { useState ,useEffect} from 'react';
// import logo from './logo.svg';

import  CardList  from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
import './App.css';
import React from 'react';

const App = () =>{

  let [searchField , setSearchField] = useState('');
  let [monsters , setMonsters] = useState([]);
  let [newMonsters , setNewMonster] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  },[])

  useEffect(() => {
    let newMonsters  = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setNewMonster(newMonsters)
  },[monsters , searchField])

  const onSearchChange = (event) => {
    let searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  return (
    <div className='App'>
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} className='search-box'
      placeholder='Search Monsters'/>

      <CardList  monsters={newMonsters}/>
    </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters : [],
//       searchString : ''
//     }
//     console.log('constructor')
//   }

//   componentDidMount(){
//     console.log('DidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(
//       () => {
//         return { monsters : users}
//       },
//       () => {
//         // console.log(this.state.monsters)
//       }
//     ))
//   }

//   onSearchChange = (event) => {
//     let searchString = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchString}
//     })
//     console.log('Hello');
//   }

//   render(){
//     console.log('Render')

//     let {monsters , searchString} = this.state;
//     let { onSearchChange } = this;

//     let newMonsters  = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//     })
//     return (
//       <div className="App">
//         <h1 className='title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} className='search-box'
//         placeholder='Search Monsters'/>
        
//         <CardList  monsters={newMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
