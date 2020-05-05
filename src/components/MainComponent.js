import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Header from './HeaderComponent';
import Menu from './MenuComponent'; 
import DishDetails from './DishDetailsComponent'
import Footer from './FooterComponent';

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
          <Header/>
          <div className="container">
               <Menu dishes = {this.state.dishes} onClick = {(dishID)=>{this.setDishID(dishID)}}/>
               <div>
                    <DishDetails selectedDish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishID)[0]}/>
               </div>
          </div>
          <Footer/>
     </div>
    );
  }
}

export default Main;
