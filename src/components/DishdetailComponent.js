import { Component } from "react";
import { CardText, Card, CardBody, CardTitle, CardImg } from "reactstrap";

class DishDetail extends Component {

    componentDidMount() {
        console.log('Dishdetail Component componentDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate is invoked');
    }

    renderDish(dish) {
        
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

    renderComments(comments) {
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
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {

        console.log('Dishdetail Component render invoked');

        if(this.props.selectedDish != null) {
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.selectedDish)}
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
                   
            );
            
        } else {
            return(
                <div></div>
            );
        }       
        
    }
}

export default DishDetail;