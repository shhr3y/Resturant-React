import React, { Component } from 'react';

import Header from './HeaderComponent';
import Menu from './MenuComponent'; 
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailsComponent'

import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom';

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

    const HomePage = ()=>{
      return(
        <div>
          <Home/>
        </div>
      );
    }
 
    return (
     <div>
          <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/menu" 
                component={ ()=> 
                  <div>
                    <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.setDishID(dishID)}}/> 
                    <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishID)[0]}/>
                  </div>
                  }/>
              <Redirect to="/home" />
            </Switch>
          <Footer/>
     </div>
    );
  }
}

export default Main;
