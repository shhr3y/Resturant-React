import React , {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

class DishDetails extends Component {

     constructor(props){
          super(props);

          this.state = {};
     }

     renderSelectedDishCard(selectedDish){
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

     render(){

          const selectedDish = this.props.selectedDish;

          if(selectedDish!=null){

               const comments = selectedDish.comments.map((comment) => {
                    return(
                    <div key={comment.id}> 
                         <p>{comment.comment}</p>
                         <p>-- {comment.author} , {comment.date}</p>
                    </div>
                    );
               });

               
               return(
                    <div className="row">
                         <div key='selectedDish' className="col-12 col-md-5 m-1">
                              {this.renderSelectedDishCard(selectedDish)}
                         </div>
                         <div key='selectedDishComments' className="col-12 col-md-5 m-1">
                              <h4>Comments</h4><br/>
                              {comments}
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


}

export default DishDetails;