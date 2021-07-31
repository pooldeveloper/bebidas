import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoryProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";
import ListRecipes from "./components/ListRecipes";
import ModalProvaider from "./context/ModalContext";

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <ModalProvaider>

          <Header />
          <div className="container mt-5">
            <div className="mb-5 row">
              <Form />
            </div>
            <ListRecipes />
          </div>
          
        </ModalProvaider>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
