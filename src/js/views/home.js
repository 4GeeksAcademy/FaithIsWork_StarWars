import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Vehicles } from "../component/Vehicles";
import {Planets} from "../component/Planets";
export const Home = () => {
	const { store, actions } = useContext(Context)
	console.log(store.people)
	console.log(store.vehicles)
	return (

		<div className="text-danger my-3 mx-4 bold align-items ">
			<h1 classsName="text-danger">Characters</h1>
			<div className="container d-flex overflow-scroll">

				{store.people.map((character, index) => (
					<Card key={index} character={character} />
				))}

			</div>
			<h1>Starships</h1>
			<div className="container d-flex overflow-scroll">

				{store.vehicles.map((Starship, index) => (
					<Vehicles key={index} Starship={Starship} />
				))}

			</div>
			<h1>Planets</h1>
			<div className="container d-flex overflow-scroll">

				{store.planets.map((Mars, index) => (
					<Planets key={index}Mars={Mars} />
				))}

			</div>
		</div>
	);
}