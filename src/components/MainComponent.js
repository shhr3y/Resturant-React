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
import {addComment,fetchDishes, fetchPromotions, fetchComments} from '../redux/ActionCreators'
import { actions } from 'react-redux-form';


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
  resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))},

  fetchDishes: () => {dispatch(fetchDishes())},
  fetchPromotions: () => {dispatch(fetchPromotions())},
  fetchComments: () => {dispatch(fetchComments())},


})


class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromotions();
    this.props.fetchComments();
  }


  render(){

    const HomePage = ()=>{
      return(
        <div>
          <Home 
            //Dishes
            featuredDish = {this.props.dishes.dishes.filter((dish)=> dish.featured===true)[0]}
            dishesLoading = {this.props.dishes.isLoading}
            dishesErrMess = {this.props.dishes.errMess}
            //Promotions
            featuredPromotion = {this.props.promotions.promotions.filter((promotion)=> promotion.featured===true)[0]}
            promotionsLoading = {this.props.promotions.isLoading}
            promotionsErrMess = {this.props.promotions.errMess}
            //Leaders
            featuredLeader = {this.props.leaders.filter((leader)=> leader.featured===true)[0]}
          />
        </div>
      );
    }

    const dishWithID = ({match})=>{

      return(
        <DishDetail
          //Dish 
          dish = {this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishID,10))[0]}
          isLoading = {this.props.dishes.isLoading}
          ErrMess = {this.props.dishes.errMess}
          //Comments
          comment = {this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishID,10))}
          commentsIsLoading = {this.props.comments.isLoading}
          commentsErrMess = {this.props.comments.errMess}
          addComment = {this.props.addComment}
        />
      );
    }
 
    return (
     <div>
          <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>      {/* TYPE 1 */}
              <Route path = "/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>    
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