import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';



function RenderSelectedDishCard(selectedDish){
     return(
          <Card>
               <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
               <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
               </CardBody>
          </Card>
     );
}

function RenderSelectedDishComments(selectedDish){

     const comments = selectedDish.comments.map((comment) => {
          return(
          <div key={comment.id}> 
               <p>{comment.comment}</p>
               <p>-- {comment.author}  [<i>{new Intl.DateTimeFormat('en-US',{month:'short',year:'numeric',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</i>]</p>
          </div>
          );
     });

     return comments;
}

function DishDetails(props){

     const selectedDish = props.selectedDish;

     if(selectedDish!=null){          
          return(
               <div className="row">
                    <div key='selectedDish' className="col-12 col-md-5 m-1">
                         {RenderSelectedDishCard(selectedDish)}
                    </div>
                    <div key='selectedDishComments' className="col-12 col-md-5 m-1">
                         <h4>Comments</h4><br/>
                         {RenderSelectedDishComments(selectedDish)}
                    </div>
               </div>
               
          );
     }
     else{
          return(
               <div>
               </div>
          );
     }
}


export default DishDetails;