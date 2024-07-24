import React, { useContext } from "react";
import Rigo from "../../img/Rigo.jpg"
import { Context } from "../store/appContext";

export const Planets = ({Mars}) => {
    const { store, actions } = useContext(Context)
     return(

<div className="card col-3 my-5 mx-4" style={{ width: "18rem;" }}>
            <img src={Rigo} className="card-img-top" alt="rigo-image" />
            <div className="card-body text-dark">
                <h5 className="card-title">Name: {Mars.name}</h5>
                <p className="card-text">Planets: {Mars.climate}</p>
                 <p className= "skin">Terrain: {Mars.terrain}</p>
                 <p className="eyecolor">Surface Water: {Mars.surface_water}</p>
                <p className="DOB">Population: {Mars.population}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button className="btn btn-primary float-end " onClick={()=>{actions.handleClick(Mars)}}> <i class="far fa-heart"></i></button>
            </div>
        </div>
     );
};



export default Planets