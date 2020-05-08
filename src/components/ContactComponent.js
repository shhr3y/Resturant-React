import React,{Component} from 'react';
import { BreadcrumbItem, Breadcrumb, Label, Col, Button, FormFeedback, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control,LocalForm,Errors } from 'react-redux-form';
class Contact extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values){
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
    }

    render(){
        return(
            <div>
                <div>
                    <Breadcrumb>
                        <div className="container">
                            <div className="row">
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </div>
                        </div>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <br/><h3>Contact Us</h3><hr/>
                    <div className="row row-content">
                        <div className="col-12">
                        <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                                <h5>Our Address</h5>
                                <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                                </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                    <div className='row row-content'>
                        <div className='col-12'>
                            <h3>Share us your Feedback!</h3><br/>
                        </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor="firstname" md={3}>First Name</Label>
                                    <Col md={9}>
                                        <Control.text 
                                            model=".firstname" 
                                            className='form-control' 
                                            id="firstname" 
                                            name="firstname" 
                                            placeholder="First Name">
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor="lastname" md={3}>Last Name</Label>
                                    <Col md={9}>
                                        <Control.text
                                            model='.lastname'
                                            className='form-control'
                                            id="lastname"
                                            name="lastname" 
                                            placeholder="Last Name">
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor="phone" md={3}>Phone Number</Label>
                                    <Col md={9}>
                                        <Control.text 
                                            model='.phone'
                                            className='form-control'
                                            id="phone" 
                                            name="phone" 
                                            placeholder="Phone Number">    
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col md={9}>
                                        <Control.text 
                                            model='.email'
                                            className='form-control'
                                            id="email" 
                                            name="email" 
                                            placeholder="Email" >
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor="message" md={3}>Feedback</Label>
                                    <Col md={9}>
                                        <Control.textarea 
                                            model=".message" 
                                            rows={5} 
                                            id="message" 
                                            className='form-control'
                                            name="message" 
                                            placeholder="Feedback">
                                        </Control.textarea>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col md={{size:4,offset:3}}>
                                        <div className='form-check'>
                                            <Label check>
                                                <Control.checkbox 
                                                    model='.agree' 
                                                    name="agree" 
                                                    className='form-check-input'
                                                />
                                                <h6>
                                                    <strong>May we contact you?</strong>
                                                </h6>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{size:3,offset:2}}>
                                        <Control.select 
                                            model=".contactType" 
                                            className='form-control'
                                            name="contactType">
                                                <option>Phone</option>
                                                <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col md={{size:10,offset:3}}>
                                        <Button type='submit' color='primary'>Send Feedback</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;