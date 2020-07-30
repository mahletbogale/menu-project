
import React, { Component } from 'react';
import { Route ,Link } from 'react-router-dom';
import Home from '../Home/Home'
import MenuList from '../MenuList/MenuList';
import MenuDetails from '../MenuDetails/MenuDetails';



class App extends Component {
constructor(){
    super();
    this.state={
      recipes:[]
    }

}
  componentDidMount(){
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res)=>res.json())
    .then(json=>{
       this.setState({recipes:json.meals})
    }); }



    
      
  render() {
    return (
      <div>
        <header>
        <Link to='/'>
       Home
       </Link>
       
       <Link to='/MenuList/MenuList'>Menu List</Link>
       </header>
       <main>
         <Route path='/' exact render={()=><Home/> }/>
         <Route path='/MenuList/MenuList' exact render={()=><MenuList recipes={this.state.recipes} />} />

         <Route path='/MenuDetails/MenuDetails'  exact render={routerProps => <MenuDetails recipes={this.state.recipes} match={routerProps.match}/>} />
     
      </main>
     
      </div>
    );
  }
}

export default App;


 