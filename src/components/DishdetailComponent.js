import React, { Component } from "react";
import { CardText, Card, CardBody, CardTitle, CardImg, BreadcrumbItem, Breadcrumb, Button, Modal, ModalHeader, ModalBody, Form, Input, Label, Row, FormGroup, Col} from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                isModalOpen: false
            };
    
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        render() {
            return(
                <div>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg">Submit Comment</span>
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleLogin}>
                                <Row >
                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label htmlFor="author">Your Name</Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Control.text model=".author" id="author" name="author" placeholder="Your Name" 
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label htmlFor="comment">Comment</Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                    </Col>
                                </Row>
                                <Row>
                                    <div></div>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit" value="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }

    

    function RenderDish({dish}) {
        
        if(dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle heading>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>                          
                    </Card>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        if(comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm />
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {

        console.log('Dishdetail Component render invoked');

        if(props.selectedDish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.selectedDish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                            <RenderDish dish={props.selectedDish}/>
                            <RenderComments comments={props.comments} />
                    </div>
                </div>
                   
            );
            
        } else {
            return(
                <div></div>
            );
        }       
        
    }


export default DishDetail;