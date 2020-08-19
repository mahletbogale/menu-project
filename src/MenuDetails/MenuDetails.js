import React, { Component } from "react";

class MenuDetails extends Component {
  constructor() {
    super();
    this.state = {
      instructions: {},
    };
  }

  // Creating another API call to get recipe instructions data
  // Displaying details of the clicked or selected recipe menu
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
    let thisMenu = this.props.recipes.find((recipe) => {
      return recipe.idMeal === this.props.match.params.idMeal;
    });

    let ins = this.state.instructions;

    return (
      <div className="menudetail">
        <ul>
          <img src={thisMenu.strMealThumb} alt="" />
          <h3 className="menuname">{thisMenu.strMeal}</h3>
          <p>{ins.strInstructions}</p>

          <h3 className="hyoutube">Youtube link</h3>

          <a href={ins.strYoutube} className="pyoutube">{ins.strYoutube}</a>

          <h3 className="ing">Ingredients</h3>
          <div className="ingridient">
            <p>{`${ins.strMeasure1}${"  "} ${ins.strIngredient1}`}</p>
            <p>{`${ins.strMeasure2}${"  "} ${ins.strIngredient2}`}</p>
            <p>{`${ins.strMeasure3}${" "} ${ins.strIngredient3}`}</p>
            <p>{`${ins.strMeasure4}${" "} ${ins.strIngredient4}`}</p>
            <p>{`${ins.strMeasure5}${" "} ${ins.strIngredient5}`}</p>
            <p>{`${ins.strMeasure6}${" "} ${ins.strIngredient6}`}</p>
            <p>{`${ins.strMeasure7}${" "} ${ins.strIngredient7}`}</p>
            <p>{`${ins.strMeasure8}${" "} ${ins.strIngredient8}`}</p>
            <p>{`${ins.strMeasure9}${" "} ${ins.strIngredient9}`}</p>
            <p>{`${ins.strMeasure10}${" "} ${ins.strIngredient10}`}</p>
            <p>{`${ins.strMeasure11}${" "} ${ins.strIngredient11}`}</p>
            <p>{`${ins.strMeasure12}${" "} ${ins.strIngredient12}`}</p>
            <p>{`${ins.strMeasure13}${" "} ${ins.strIngredient13}`}</p>
            <p>{`${ins.strMeasure14}${" "} ${ins.strIngredient14}`}</p>
            {ins.strIngredient15 && (
              <p>{`${ins.strMeasure15}${" "} ${ins.strIngredient15}`}</p>
            )}
            {ins.strIngredient16 && (
              <p>{`${ins.strMeasure16}${" "} ${ins.strIngredient16}`}</p>
            )}
            {ins.strIngredient17 && (
              <p>{`${ins.strMeasure17}${" "} ${ins.strIngredient17}`}</p>
            )}
             {ins.strIngredient18 && (
              <p>{`${ins.strMeasure18}${" "} ${ins.strIngredient18}`}</p>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default MenuDetails;
