import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props)=>{
    const[recipes, setRecipes] = useState([]);

    const[dataRecipes, setDataRecipes]= useState({
        name: '',
        category:''
    })
    const{name, category}= dataRecipes;
    const [consult, setConsult] = useState(false)

    useEffect(() => {
        if(consult){
            const run = async ()=>{
                const resource = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                await axios.get(resource)
                .then((response) => {
                    setRecipes(response.data.drinks)
                }).catch((error) => {
                    alert('Hubo un error al consultar la API recarge la pagina xfa')
                });
            }
            run();
        }
    }, [category, name, consult])

    return(
        <RecipesContext.Provider
            value={{
                setDataRecipes,
                setConsult,
                recipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;