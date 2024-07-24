import React, { useContext } from "react";
import Rigo from "../../img/Rigo.jpg"
import { useActionData } from "react-router";
import { Context } from "../store/appContext";

export const Vehicles = ({Starship}) => {

    const { store, actions } = useContext(Context)
    return(

        <div className="card col-3 my-5 mx-4" style={{ width: "18rem;" }}>
        <img src={Rigo} className="card-img-top" alt="rigo-image" />
        <div className="card-body text-dark overflow-y: auto;">
            <h5 className="card-title">{Starship.name}</h5>
            <p className="card-text ">Model: {Starship.model}</p>
            <p className="card-text">Length: {Starship.length}</p>
            <p className="card-text">Cost In Credits: {Starship.cost_in_creditsl}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <button className="btn btn-primary float-end " onClick={()=>{actions.handleClick(Starship)}} > <i class="far fa-heart"></i></button>
        </div>
    </div>
    );
};


export default Vehicles