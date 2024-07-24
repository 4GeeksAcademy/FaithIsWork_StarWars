import React, { useContext } from "react";

import Rigo from "../../img/Rigo.jpg"
import { Context } from "../store/appContext";

export const Card = ({ character }) => {
    const { store, actions } = useContext(Context)

    return (


        <div className="card col-3 my-5 mx-4" style={{ width: "18rem;" }}>
            <img src={Rigo} className="card-img-top" alt="rigo-image" />
            <div className="card-body text-dark">
                <h5 className="card-title">Name: {character.name}</h5>
                <p className="card-text">Hair Color: {character.hair_color}</p>
                 <p className= "skin">Skin Color: {character.skin_color}</p>
                 <p className="eyecolor">Eye Color: {character.eye_color}</p>
                <p className="DOB">DOB: {character.birth_year}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button className="btn btn-primary float-end "onClick={(e) => actions.handleClick(character)} > <i class="far fa-heart"></i></button>
        
            </div>
        </div>



    );
}

export default Card