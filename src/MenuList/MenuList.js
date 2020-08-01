import React, { Component } from "react";

import { Link } from "react-router-dom";

class MenuList extends Component {
  render() {
    return (
      <div className="menulist">
        <div className="boxbackground">
          {this.props.recipes.map((recipe) => {
            return (
              <Link to={`/menudetails/${recipe.idMeal}`}>
                <div className="boxes">
                  <img src={recipe.strMealThumb} alt={recipe.strMealThumb} />
                  <p>{recipe.strMeal} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MenuList;
