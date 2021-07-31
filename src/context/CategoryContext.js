import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear el Context
export const CategoryContext = createContext();

//Provider se encuentra funciones y state
const CategoryProvider = (props)=>{
    const[category, setCategory]= useState([])
    useEffect(() => {
        const run = async ()=>{
            const resource = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            await axios.get(resource)
            .then((response) => {
                setCategory(response.data.drinks);
            }).catch((error) => {
                alert('Hubo un error en la API recarge la pagina xfa')
            });
        }
        run();
    }, [])
    return(
        <CategoryContext.Provider
            value= {{
                category
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;

