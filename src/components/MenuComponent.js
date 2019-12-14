import React, { Component } from 'react';
/*import { Media } from 'reactstrap';*/
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderComments(comments) {

		
    	const dishComment = this.props.dishes.map((dish) => {
    		var d = new Date(dish.comments[dish.id].date);
    		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            return (

            		<li className="m-1">{dish.comments[dish.id].comment} <br/> -- {dish.comments[dish.id].author}, {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</li>
            				
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

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                	{this.renderDish(this.state.selectedDish)}
                	{this.renderComments(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;