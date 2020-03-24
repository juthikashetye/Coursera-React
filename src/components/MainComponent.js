import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
        <DishDetail dishes={this.state.dishes} selectedMenuDish = {this.state.selectedDish} dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;