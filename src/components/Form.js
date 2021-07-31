import React,{useContext, useState} from 'react';
import {CategoryContext} from '../context/CategoryContext';
import {RecipesContext} from '../context/RecipesContext';

const Form = () => {

    const {category} = useContext(CategoryContext)
    const {setDataRecipes, setConsult} = useContext(RecipesContext)

    const [search, setSearch] = useState({
        name: '',
        category:''
    })
    const getSearch = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    } 
    return (
        <form 
            className="col-12"
            onSubmit={
                e =>{
                    e.preventDefault();
                    setDataRecipes(search);
                    setConsult(true);
                }
            }
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por categoria o ingrediente</legend>
            </fieldset>
            <div className="mt-4 row">
                <div className="mb-4 mb-md-0 col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange = {getSearch}
                    />
                </div>
                <div className="mb-4 col-md-4 mb-md-0">
                    <select
                     className="text-center form-control"
                     name="category"
                     onChange = {getSearch}
                    >
                        <option>-- Seleccione la Categoría --</option>
                        {
                            category.map(category=>(
                                <option 
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Form;