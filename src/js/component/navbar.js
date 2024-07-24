import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo_Star_Wars from "../../img/Logo_Star_Wars.jpeg"
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 py-4">
			<Link className="navbar-brand" to="/">
				<img src={Logo_Star_Wars} alt="star wars logo" width="10%" height="20%" className="p-1 mx-5" />
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
					<span>{store.favorites.length != 0 && store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.length != 0 && store.favorites.map((favorite, index) => {
						return (
							<li>
								{favorite.name}
								<button className="remove bg-danger" onClick={() => actions.handleDelete(favorite.name)}><i class="fas fa-trash"></i></button>
							</li>
						
						)
					})}
				</ul>
			</div>
		</nav>
	);
};
