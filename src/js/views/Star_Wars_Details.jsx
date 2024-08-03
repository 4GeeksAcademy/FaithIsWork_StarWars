import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Rigo from "../../img/Rigo.jpg";
import { useLocation } from "react-router";

export const Star_Wars_Details = () => {
    const { store, actions } = useContext(Context)
    const location = useLocation()
    const data = location.state
    console.log(data)

    return (

        <div className="card mb-3 col-12 border-bottom" style={{maxWidth: "100", maxHeight: "100"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Rigo} style={{maxWidth: "100", maxHeight: "100"}}className="img-fluid rounded-start " alt="rigo the geek" />
                </div>
                <div className="col-md-8 border-start">
                    <div className="card-body">
                        <h5 className="card-title bold h4">{data.name}</h5>
                        <p className="card-text bold h5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> 
                    </div>
                </div>
            </div>
            <div className=" p-2 d-flex">
                <p className="border-end p-2 col-1  bold">Hair Color <br/> {data.hair_color}</p>
                <p className="border-end p-2">Skin Color <br/>{data.skin_color}</p>
                <p className=" border-end p-2 ">Eye Color <br/> {data.eye_color}</p>
                <p className=" border-end p-2 ">Date Of Birth <br/> {data.birth_year}</p>
                <p className=" border-end p-2 ">Gender <br/> {data.gender}</p>
                <p className=" border-end p-2 ">Height <br/> {data.eight}</p>
                <p className=" border-end p-2 ">Eye Color <br/> {data.eye_color}</p>
            </div>
        </div>


    );

}; 


export default Star_Wars_Details