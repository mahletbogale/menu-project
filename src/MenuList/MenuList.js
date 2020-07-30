import React, { Component } from 'react';

import{ Link } from 'react-router-dom';





class MenuList extends Component {
   
    
    render() {
        return (
            <div>
         
          <ul>
             
          {this.props.recipes.map((recipe)=>{
          return  <Link to="/MenuDetails/MenuDetails" ><img src={recipe.strMealThumb} alt={recipe.strMealThumb} width="100"/> 
          {recipe.strMeal}
          </Link>
          
          
       
          
          })

        } 
        </ul>
       
       
        
        </div> 
           
        );
    }
}

export default MenuList;

