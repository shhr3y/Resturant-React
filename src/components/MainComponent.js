import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent'; 
import DishDetails from './DishDetailsComponent'
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      dishes : DISHES,
      selectedDishID : null,
    }

  }

  setDishID(dishID){
       this.setState({selectedDishID:dishID});
  }

  render(){
    return (
     <div>
          <Navbar dark color="primary" >
          <div className="container">
               <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
          </Navbar>
          <div className="container">
               <Menu dishes = {this.state.dishes} onClick = {(dishID)=>{this.setDishID(dishID)}}/>
               <div>
                    <DishDetails selectedDish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishID)[0]}/>
               </div>
          </div>
     </div>
    );
  }
}

export default Main;
