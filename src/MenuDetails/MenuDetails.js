import React, { Component } from 'react';
// const menuUrl="https://www.themealdb.com/api/json/v1/1/lookup.php?i="


class MenuDetails extends Component {
    // componentDidMount(){
    //   const menuId=this.props.match.params.recipe;
       
    //      const url = `${menuUrl}${menuId}.json`;
    
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(response => {
    //         // let newPrice = response.bpi[currency].rate;
    //         this.state(instructions)=this.props.recipe;
    //       })
    //       .catch(err => {
    //         console.error(err);
    //       });
          
    //   }




    render() {
        const details= this.props.recipes.find((recipe)=>{
          return recipe.name===this.props.match.params.name
        });

        return (
            <div>
              <img src={details.strMealThumb} alt={details.strMealThumb}/>
        <h2>{details.strMeal}</h2>
            </div>
        );
    }
}

export default MenuDetails;