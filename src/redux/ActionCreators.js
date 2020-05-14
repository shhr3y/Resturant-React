import * as ActionTypes from './ActionTypes'
import {baseURL} from '../shared/baseURL';

export const addComment = (dishID,rating,author,comment) => ({
     type:ActionTypes.ADD_COMMENT,
     payload:{
          dishId: dishID,
          rating: rating,
          author: author,
          comment: comment,
     }
});

//DISHES
export const fetchDishes = () => (dispatch) => {
     dispatch(dishesLoading(true));

     return fetch(baseURL+'dishes')
               .then(response =>{
                    if(response.ok){
                         return response;
                    }else{
                         var error = new Error('Error '+response.status+': '+response.statusText);
                         error.response = response;
                         throw error;
                    }
               },error => {
                    var errmess = new Error(error.message);
                    throw errmess;
               })
               .then(response => response.json())
               .then(dishes => dispatch(addDishes(dishes)))
               .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = ()=>({
     type: ActionTypes.DISHES_LOADING,

})


export const dishesFailed = (errMess)=>({
     type: ActionTypes.DISHES_FAILED,
     payload: errMess
})

export const addDishes =(dishes)=>({
     type: ActionTypes.ADD_DISHES,
     payload: dishes
})


//COMMENTS
export const fetchComments = () => (dispatch) => {

     return fetch(baseURL+'comments')
               .then(response =>{
                    if(response.ok){
                         return response;
                    }else{
                         var error = new Error('Error '+response.status+': '+response.statusText);
                         error.response = response;
                         throw error;
                    }
               },error => {
                    var errmess = new Error(error.message);
                    throw errmess;
               })
               .then(response => response.json())
               .then(comments => dispatch(addComments(comments)))
               .catch(error => dispatch(commentsFailed(error.message)));
}


export const commentsFailed = (errMess)=>({
     type: ActionTypes.COMMENTS_FAILED,
     payload: errMess
})

export const addComments =(comments)=>({
     type: ActionTypes.ADD_COMMENTS,
     payload: comments
})


//PROMOTIONS
export const fetchPromotions = () => (dispatch) => {
     dispatch(promotionsLoading(true));

     return fetch(baseURL+'promotions')
               .then(response =>{
                    if(response.ok){
                         return response;
                    }else{
                         var error = new Error('Error '+response.status+': '+response.statusText);
                         error.response = response;
                         throw error;
                    }
               },error => {
                    var errmess = new Error(error.message);
                    throw errmess;
               })
               .then(response => response.json())
               .then(promotions => dispatch(addPromotions(promotions)))
               .catch(error => dispatch(promotionsFailed(error.message)));
}

export const promotionsLoading = ()=>({
     type: ActionTypes.PROMOS_LOADING,

})

export const promotionsFailed = (errMess)=>({
     type: ActionTypes.PROMOS_FAILED,
     payload: errMess
})

export const addPromotions =(promotions)=>({
     type: ActionTypes.ADD_PROMOS,
     payload: promotions
})


//LEADERS
export const fetchLeaders = () => (dispatch) => {
     dispatch(leadersLoading(true));

     return fetch(baseURL+'leaders')
               .then(response =>{
                    if(response.ok){
                         return response;
                    }else{
                         var error = new Error('Error '+response.status+': '+response.statusText);
                         error.response = response;
                         throw error;
                    }
               },error => {
                    var errmess = new Error(error.message);
                    throw errmess;
               })
               .then(response => response.json())
               .then(leaders => dispatch(addLeaders(leaders)))
               .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = ()=>({
     type: ActionTypes.LEADERS_LOADING,

})

export const leadersFailed = (errMess)=>({
     type: ActionTypes.LEADERS_FAILED,
     payload: errMess
})

export const addLeaders =(leaders)=>({
     type: ActionTypes.ADD_LEADERS,
     payload: leaders
})