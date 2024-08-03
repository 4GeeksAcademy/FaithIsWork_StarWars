import React, { useContext } from "react";
import Rigo from "../../img/Rigo.jpg";
import { Context } from "../store/appContext";
import { useLocation } from "react-router";


export const Mars_Details = () => {
    const { store, actions } = useContext(Context)
    const location = useLocation()
    const planet_info = location.state
    
    return( 
        <div className="card mb-3 col-12 border-bottom" style={{maxWidth: "100", maxHeight: "100"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Rigo} style={{maxWidth: "100", maxHeight: "100"}}className="img-fluid rounded-start " alt="rigo the geek" />
                </div>
                <div className="col-md-8 border-start">
                    <div className="card-body">
                        <h5 className="card-title bold h4">{planet_info.name}</h5>
                        <p className="card-text bold h5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> 
                    </div>
                </div>
            </div>
            <div className=" p-2 d-flex">
                <p className="border-end p-2 col-1  bold">Planets <br/> {planet_info.climate}</p>
                <p className="border-end p-2">Terrain <br/>{planet_info.terrain}</p>
                <p className=" border-end p-2 ">Surface Water <br/> {planet_info.surface_water}</p>
                <p className=" border-end p-2 ">Population <br/> {planet_info.population}</p>
            
            </div>
        </div>
  
    );
};
export default Mars_Details