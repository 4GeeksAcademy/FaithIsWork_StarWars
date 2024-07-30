import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Rigo from "../../img/Rigo.jpg";
import { useLocation } from "react-router";


export const Vehicles_Detail = () => {
    const { store, actions } = useContext(Context)
    const location = useLocation()
    const vehicles = location.state


    return (

        <div className="card mb-3 col-12 border-bottom" style={{ maxWidth: "100", maxHeight: "100" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Rigo} style={{ maxWidth: "100", maxHeight: "100" }} className="img-fluid rounded-start " alt="rigo the geek" />
                </div>
                <div className="col-md-8 border-start">
                    <div className="card-body">
                        <h5 className="card-title bold h4">{vehicles.name}</h5>
                        <p className="card-text bold h5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className=" p-2 d-flex">
                <p className="border-end p-2 col-1  bold">Model <br /> {vehicles.name}</p>
                <p className="border-end p-2">length <br />{vehicles.length}</p>
                <p className=" border-end p-2 ">Cost In Credits <br /> {vehicles.cost_in_credits}</p>

            </div>
        </div>


    );

};


export default Vehicles_Detail