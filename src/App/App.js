// Importing components ,Link and Route

import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import MenuList from "../MenuList/MenuList";
import MenuDetails from "../MenuDetails/MenuDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  // Fetching API
  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ recipes: json.meals });
      });
  }
  // Adding Link to different pages
  // passing data to children components
  // Adding Route path
  render() {
    return (
      <div className="head">
        <header>
          <div className="icon">msr</div>
          <Link to="/">Home</Link>

          <Link to="/menulist/menulist">Recipe Menu List</Link>
        </header>
        <main className="appmain">
          <Route path="/" exact render={() => <Home />} />
          <Route
            path="/menulist/menulist"
            exact
            render={() => <MenuList recipes={this.state.recipes} />}
          />
          <Route
            path="/menudetails/:idMeal"
            exact
            render={(routerProps) => (
              <MenuDetails
                recipes={this.state.recipes}
                match={routerProps.match}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
