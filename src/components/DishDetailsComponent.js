import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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

function RenderSelectedDishComments(comments){

     const dishComments = comments.map((comment) => {
          return(

     <div key={comment.id} className='mt-3'> 
          <Card>
               <CardBody className="bg-faded">
                    <blockquote className="blockquote">
                    <p className="mb-0">{comment.comment}</p>
                         <footer className="blockquote-footer">{comment.author},
                         <cite title="Source Title">{new Intl.DateTimeFormat('en-US',{month:'short',year:'numeric',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</cite>
                         </footer>
                    </blockquote>
               </CardBody>
          </Card>
     </div>



          );
     });

     return dishComments;
}

function DishDetail(props){

     const selectedDish = props.dish;
     const selectedComment = props.comment;

     if(selectedDish!=null){          
          return(
               <div>
                    <Breadcrumb>
                         <div className='container'>
                              <div className="row">
                                   <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                   <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                              </div>
                         </div>
                    </Breadcrumb>
                    <div className="container">
                         <div className="row row-content">
                              <div key='selectedDish' className="col-12 col-md-5 m-1">
                                   {RenderSelectedDishCard(selectedDish)}
                              </div>
                              <div key='selectedDishComments' className="col-12 col-md-5 m-1">
                                   <h4>Comments</h4>
                                   {RenderSelectedDishComments(selectedComment)}
                              </div>
                         </div>
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


export default DishDetail;