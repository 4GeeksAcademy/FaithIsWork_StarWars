import React, { useContext } from "react";
import Rigo from "../../img/Rigo.jpg"
import { useActionData, useLocation } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = ({Starship}) => {

    const { store, actions } = useContext(Context)
    const location = useLocation()
    const ship = location.state
    
    return(

        <div className="card col-3 my-5 mx-4" style={{ width: "18rem" }}>
        <img src={Rigo} className=" card-img-top" alt="rigo-image" />
        <div className="card-body text-dark overflow-y: auto;">
            <h5 className="card-title">{Starship.name}</h5>
            <p className="card-text ">Model: {Starship.model}</p>
            <p className="card-text">Length: {Starship.length}</p>
            <p className="card-text">Cost In Credits: {Starship.cost_in_creditsl}</p>
            <Link to ={`/vehicles/${Starship.name}`} state={Starship}>
            <button href="#" className="btn btn-primary">Learn More!</button>
            </Link>
            <button className="btn btn-primary float-end " onClick={()=>{actions.handleClick(Starship)}} > <i class="far fa-heart"></i></button>
        </div>
        
    </div>
    );
};


export default Vehicles