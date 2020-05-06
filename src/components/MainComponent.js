import React, { Component } from 'react';

import Header from './HeaderComponent';
import Menu from './MenuComponent'; 
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailsComponent'
import Contact from './ContactComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,

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
          <Home 
            featuredDish = {this.state.dishes.filter((dish)=> dish.featured===true)[0]}
            featuredPromotion = {this.state.promotions.filter((promotion)=> promotion.featured===true)[0]}
            featuredLeader = {this.state.leaders.filter((leader)=> leader.featured===true)[0]}
          />
        </div>
      );
    }
 
    return (
     <div>
          <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>{/* TYPE  */}
              <Route exact path="/menu" 
                component={ ()=> 
                  <div>
                    <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.setDishID(dishID)}}/> 
                    <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishID)[0]}/>
                  </div>
                  }/>{/* TYPE 2 */}
              <Route path = "/contactus" component={Contact}/>{/* TYPE 3 */}
              <Redirect to="/home" />
            </Switch>
          <Footer/>
     </div>
    );
  }
}

export default Main;
