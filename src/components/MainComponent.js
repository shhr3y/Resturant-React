import React, { Component } from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent'; 
import DishDetail from './DishDetailsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

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
    }

  }

  // setDishID(dishID){
  //      this.setState({selectedDishID:dishID});
  // }

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

    const dishWithID = ({match})=>{

      return(
        <DishDetail 
          dish = {this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishID,10))[0]}
          comment = {this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishID,10))}
        />
      );
    }
 
    return (
     <div>
          <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>      {/* TYPE 1 */}
              <Route path = "/contactus" component={Contact}/>      {/* TYPE 3 */}
              <Route exact path="/menu" component={ ()=> <div><Menu dishes={this.state.dishes}/></div>}/>     {/* TYPE 2 */}
              <Route path="/menu/:dishID" component={dishWithID}/>
              <Route path="/aboutus" component={()=> <About leaders={this.state.leaders}/>}/>
              <Redirect to="/home" />
            </Switch>
          <Footer/>
     </div>
    );
  }
}

export default Main;




// <Route exact path="/menu" 
// component={ ()=> 
// <div>
//   <Menu dishes={this.state.dishes}/> 
// </div>
// }/>{/* TYPE 2 */}


// <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.setDishID(dishID)}}/> 
//                     <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishID)[0]}/>