import React, { Component } from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent'; 
import DishDetail from './DishDetailsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {addComment,fetchDishes} from '../redux/ActionCreators'


const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments : state.comments,
    leaders : state.leaders,
    promotions : state.promotions,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishID,rating,author,comment) => dispatch(addComment(dishID,rating,author,comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
})


class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
  }


  render(){

    const HomePage = ()=>{
      return(
        <div>
          <Home 
            featuredDish = {this.props.dishes.dishes.filter((dish)=> dish.featured===true)[0]}
            dishesLoading = {this.props.dishes.isLoading}
            dishesErrMess = {this.props.dishes.errMess}
            featuredLeader = {this.props.leaders.filter((leader)=> leader.featured===true)[0]}
            featuredPromotion = {this.props.promotions.filter((promotion)=> promotion.featured===true)[0]}
          />
        </div>
      );
    }

    const dishWithID = ({match})=>{

      return(
        <DishDetail 
          dish = {this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishID,10))[0]}
          isLoading = {this.props.dishes.isLoading}
          ErrMess = {this.props.dishes.errMess}
          comment = {this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishID,10))}
          addComment = {this.props.addComment}
        />
      );
    }
 
    return (
     <div>
          <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>      {/* TYPE 1 */}
              <Route path = "/contactus" component={Contact}/>      {/* TYPE 3 */}
              <Route exact path="/menu" component={ ()=> <div><Menu dishes={this.props.dishes}/></div>}/>     {/* TYPE 2 */}
              <Route path="/menu/:dishID" component={dishWithID}/>
              <Route path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}/>
              <Redirect to="/home" />
            </Switch>
          <Footer/>
     </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));




//line after class defination
  // setDishID(dishID){
  //      this.setState({selectedDishID:dishID});
  // }





// <Route exact path="/menu" 
// component={ ()=> 
// <div>
//   <Menu dishes={this.state.dishes}/> 
// </div>
// }/>{/* TYPE 2 */}


// <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.setDishID(dishID)}}/> 
//                     <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishID)[0]}/>