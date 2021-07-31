import React,{useContext} from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Recipe from './Recipe';

const ListRecipes = () => {
    const {recipes} = useContext(RecipesContext)
    return (
        <div className="row">
            {
                recipes.map(recipe=>(
                    <Recipe
                        key = {recipe.idDrink}
                        recipe = {recipe}
                    />
                ))
            }
        </div>
    );
}
 
export default ListRecipes;