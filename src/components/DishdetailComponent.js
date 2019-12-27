import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

	/* Function to display the selected dish */
    renderDish(dish) {

        if (dish != null)
            return(
            	
            		<div className="col-12 col-md-5 m-1">
		                <Card>
		                    <CardImg top src={dish.image} alt={dish.name} />
		                    <CardBody>
		                      <CardTitle>{dish.name}</CardTitle>
		                      <CardText>{dish.description}</CardText>
		                    </CardBody>
		                </Card>
	                </div>
            );
        else
            return(
                <div></div>
            );
    }

	/* Function to display comments of the selected dish */
	renderComments(comments) {
	
    	const dishComment = this.props.dishes.map((dish) => {
    		var d = new Date(dish.comments[dish.id].date);
    		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            return (

            		<li key={dish.id} className="m-1">{dish.comments[dish.id].comment} <br/> -- {dish.comments[dish.id].author}, {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</li>
            				
            )
        });

        if (comments !=null)
        	return(
        		<div className="col-12 col-md-5 m-1">
        			<h4>Comments</h4>
        			<ul className="list-unstyled">
	            		{dishComment}
					</ul>
	            </div>
        	)
        else
        	return(
        		<div></div>
        	)
    }

    render() {

        return (
        		/* Calling the above functions and passing the selected dish from MenuComponent as props */

                <div className="row">
                	{this.renderDish(this.props.selectedMenuDish)}
                	{this.renderComments(this.props.selectedMenuDish)}
                </div>

        );
    }
}

export default DishDetail;