import { Component } from "react";
import { CardText, Card, CardBody, CardTitle, CardImg } from "reactstrap";
import { Media } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        
        if(dish != null) {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
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
                <div className="col-14 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div tag="li">
                        {comments}
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {

        if(this.props.selectedDish != null) {
            var commentsArray = this.props.selectedDish.comments.map((comment) => {
                return(
                    <div>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {comment.date}</p>
                    </div>
                );
            })
        } else {
            return(
                <div></div>
            );
        }
        

            return(
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(commentsArray)}
                </div>
                
            )         
        
    }
}

export default DishDetail;