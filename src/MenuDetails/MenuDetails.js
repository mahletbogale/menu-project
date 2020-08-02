import React, { Component } from "react";

class MenuDetails extends Component {
  constructor() {
    super();
    this.state = {
      instructions: {},
    };
  }
  componentDidMount() {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idMeal}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ instructions: json.meals[0] });
        console.log(json.meals);
      });
  }
  render() {
    let ins = this.state.instructions;

    let thisMenu = this.props.recipes.find((recipe) => {
      return recipe.idMeal === this.props.match.params.idMeal;
    });

    return (
      <div className="menudetail">
        <ul>
          <img src={thisMenu.strMealThumb} alt="" />
          <h3 className="menuname">{thisMenu.strMeal}</h3>

          <p>{ins.strInstructions}</p>

          <h3 className="ing">Ingredients</h3>
          <div className="ingridient">
            <p>{`${ins.strIngredient1}${"  "} ${ins.strMeasure1}`}</p>
            <p>{`${ins.strIngredient2}${"  "} ${ins.strMeasure2}`}</p>
            <p>{`${ins.strIngredient3}${" "} ${ins.strMeasure3}`}</p>
            <p>{`${ins.strIngredient4}${" "} ${ins.strMeasure4}`}</p>
            <p>{`${ins.strIngredient5}${" "} ${ins.strMeasure5}`}</p>
            <p>{`${ins.strIngredient6}${" "} ${ins.strMeasure6}`}</p>
            <p>{`${ins.strIngredient7}${" "} ${ins.strMeasure7}`}</p>
            <p>{`${ins.strIngredient8}${" "} ${ins.strMeasure8}`}</p>
            <p>{`${ins.strIngredient9}${" "} ${ins.strMeasure9}`}</p>
            <p>{`${ins.strIngredient10}${" "} ${ins.strMeasure10}`}</p>
            <p>{`${ins.strIngredient11}${" "} ${ins.strMeasure11}`}</p>
            <p>{`${ins.strIngredient12}${" "} ${ins.strMeasure12}`}</p>
            <p>{`${ins.strIngredient13}${" "} ${ins.strMeasure13}`}</p>
            <p>{`${ins.strIngredient14}${" "} ${ins.strMeasure14}`}</p>
            <p>{`${ins.strIngredient15}${" "} ${ins.strMeasure15}`}</p>
            <p>{`${ins.strIngredient16}${" "} ${ins.strMeasure16}`}</p>
          </div>
        </ul>
      </div>
    );
  }
}

export default MenuDetails;
