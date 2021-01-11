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

    render() {

            return(
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                
            )         
        
    }
}

export default DishDetail;