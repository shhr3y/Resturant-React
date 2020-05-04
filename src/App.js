import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import Members from './components/ShreyComponent'
import { DISHES } from './shared/dishes';
import { MEMBERS} from './shared/shreys';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    
    this.state = {
      dishes : DISHES,
      members : MEMBERS,
    }

  }


  render(){
    return (
      <div>
        <Navbar dark color="primary" >
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        {/* <Members members = {this.state.members}/> */}
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
