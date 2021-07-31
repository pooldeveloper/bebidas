import React, {useState, useContext} from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
    },
    header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
    },
    content: {
        padding: "12px 0",
        overflow: 'scroll'
    }
}));


const Recipe = ({recipe}) => {
    // Configuración del modal de material-ui
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const{strDrink, strDrinkThumb, idDrink}= recipe;
    const{setIdRecipe, infoRecipe, setInfoRecipe} = useContext(ModalContext)

    //Muestra y formatea los ingredientes
    const showIngredients = (infoRecipe)=>{
        let ingredients = [];
        for(let i = 1; i < 16; i++){
            if(infoRecipe[`strIngredient${i}`]){
                ingredients.push(
                    <li key={i}>{infoRecipe[`strIngredient${i}`]} {infoRecipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }
    return (
        <div className="mb-3 col-md-4">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>
                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`}></img>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            setIdRecipe(idDrink)
                            handleOpen()
                        }}
                    >
                        Ver receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            setInfoRecipe({});
                            setIdRecipe(null);
                        }}
                     >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{infoRecipe.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {infoRecipe.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={infoRecipe.strDrinkThumb} alt={`Imagen de ${infoRecipe.strDrink}`}/>
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {showIngredients(infoRecipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Recipe;