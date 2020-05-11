import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem,Button,} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent'
import {Loading} from './LoadingComponent'

class DishDetail extends Component{

     constructor(props){
          super(props);

          this.state = {
               isModalOpen : false
          }

          this.RenderSelectedDishCard = this.RenderSelectedDishCard.bind(this);
          this.RenderSelectedDishComments = this.RenderSelectedDishComments.bind(this);
          this.toggleModal = this.toggleModal.bind(this);
     }
     
     RenderSelectedDishCard(selectedDish){
          return(
               <div className='mt-3'> 
                    <Card>
                         <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                         <CardBody>
                              <CardTitle>{selectedDish.name}</CardTitle>
                              <CardText>{selectedDish.description}</CardText>
                         </CardBody>
                    </Card>
               </div>
          );
     }
     
     RenderSelectedDishComments(comments){
     
          var dishComments = comments.map((comment) => {
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
     
          const submitCommentButtom = 
               <div className='text-center'>
                    <br/>
                    <Button outline onClick={this.toggleModal}><span className='fa fa-pencil fa-lg'/> Submit Comment</Button>
               </div>
     
          dishComments.push(submitCommentButtom);
          
          return dishComments;
     }

     toggleModal(){
          this.setState({
               isModalOpen : !this.state.isModalOpen, 
          });
     }
     
     render(){
     
          const selectedDish = this.props.dish;
          const selectedComment = this.props.comment;

          if(this.props.isLoading){
               return(
                    <div className='container'>
                         <div className='row'>
                              <Loading/>
                         </div>
                    </div>
               );
          }
          else if(this.props.errMess){
               return(
                    <div className='container'>
                         <div className='row'>
                              <h4>{this.props.errMess}</h4>
                         </div>
                    </div>
               );
          }
          else if(selectedDish!=null){          
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
                                   <div key='selectedDish' className="col-12 col-md-5 m-2">
                                        <h4>{selectedDish.name}</h4>   
                                        {this.RenderSelectedDishCard(selectedDish)}
                                   </div>
                                   <div key='selectedDishComments' className="col-12 col-md-5 m-2">
                                        <h4>Comments</h4>
                                        {this.RenderSelectedDishComments(selectedComment)}
                                   </div>
                              </div>
                         </div>
                         <CommentForm 
                              isOpen={this.state.isModalOpen} 
                              toggle={this.toggleModal} 
                              selectedDishID={selectedDish.id} 
                              addComment={this.props.addComment} 
                         />
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



export default DishDetail;