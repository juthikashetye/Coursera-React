import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({dish, onClick}) {

    return(
        <Card key={dish.id} onClick={() => onClick(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
    );

}  

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} onClick={props.onClick} /> 
          </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>

            {/*Importing the DishdetailComponent and giving the value of dishes in the DishdetailComponent as props from the dishes.js file,
            and setting the selectedMenuDish props from DishdetailComponent as the state of selectedDish in MenuComponent */}

            {/*<DishDetail dishes={this.props.dishes} selectedMenuDish = {this.state.selectedDish} />*/}    
        </div>
    );

}   
    
export default Menu;