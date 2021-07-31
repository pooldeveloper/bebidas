import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const ModalContext = createContext();
const ModalProvaider = (props) => {

    const[idRecipe, setIdRecipe]= useState(null);
    const[infoRecipe, setInfoRecipe]= useState({})
    useEffect(() => {
        const run = async ()=>{
            if(!idRecipe) return;
            const resource = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
            await axios.get(resource)
            .then((response) => {
                setInfoRecipe(response.data.drinks[0]);
            }).catch((error) => {
                alert('Hubo un error en la API recarge la pagina xfa')
            });
        }
        run();
    }, [idRecipe])

    return (
        <ModalContext.Provider
            value={{
                setIdRecipe,
                infoRecipe,
                setInfoRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvaider;
