import React, { Component } from 'react';
import {Label,Button, Modal,ModalBody,ModalHeader,Row,Col} from 'reactstrap'
import { Control,LocalForm, Errors } from 'react-redux-form';


const required = (value) => value && value.length;
const maxLength = (length) => (value) => !(value)||(value.length<=length);
const minLength = (length) => (value) => (value)&&(value.length>=length);



class CommentForm extends Component{

     constructor(props){
          super(props);

          this.state={
               isModalOpen : false
          }

          this.handleSubmit = this.handleSubmit.bind(this);
          this.toggleModal = this.toggleModal.bind(this);
     }

     toggleModal(){
          this.setState({
               isModalOpen : !this.state.isModalOpen, 
          });
     }

     handleSubmit(values){
          this.toggleModal();
          this.props.addComment(this.props.selectedDishID,values.rating,values.name,values.comment);
      }

     render(){ 
          return(
               <div>
                    <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} centered >
                         <ModalHeader toggle={this.props.toggle}>Submit Comment</ModalHeader>
                         <ModalBody>
                              <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                   <Row className='form-group'>
                                        <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={12}>
                                        <Control.select 
                                             model=".rating" 
                                             className='form-control'
                                             name="rating">
                                                  <option>1</option>
                                                  <option>2</option>
                                                  <option>3</option>
                                                  <option>4</option>
                                                  <option>5</option>
                                        </Control.select>
                                        </Col>
                                   </Row>
                                   <Row className='form-group'>
                                        <Label htmlFor="name" md={12}>Your Name</Label>
                                        <Col md={12}>
                                        <Control.text 
                                             model=".name" 
                                             className='form-control' 
                                             id="name" 
                                             name="name" 
                                             validators={{
                                                  required,
                                                  minLength: minLength(3),
                                                  maxLength: maxLength(15)
                                             }}
                                             placeholder="Your Name">
                                        </Control.text>
                                        <Errors
                                             className='text-danger'
                                             model='.name'
                                             show='touched'
                                             messages={{
                                                  required:'Required! ',
                                                  minLength:'Must be greater than 2 Characters! ',
                                                  maxLength:'Must be less than 16 Characters! '
                                             }}
                                        />
                                        </Col>
                                   </Row>
                                   <Row className='form-group'>
                                        <Label htmlFor="comment" md={12}>Comment</Label>
                                        <Col md={12}>
                                             <Control.textarea 
                                             model=".comment" 
                                             rows={5} 
                                             id="comment" 
                                             className='form-control'
                                             name="comment" 
                                             placeholder="Your Comment here">
                                             </Control.textarea>
                                        </Col>
                                   </Row>     
                                   <div className='text-center'>
                                        <Button type='submit' color='primary'>Submit</Button>
                                   </div>
                              </LocalForm>
                         </ModalBody>
                    </Modal>
               </div>
          );
     }
}


export default CommentForm;