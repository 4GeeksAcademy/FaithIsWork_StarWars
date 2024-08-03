import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Star_Wars_Details } from "./views/Star_Wars_Details.jsx";
import {Vehicles_Detail} from "./views/Vehicles_detail.jsx";
import { Mars_Details } from "./views/Mars-Details.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:id" element={<Star_Wars_Details />} />
						<Route path="/vehicles/:name" element={<Vehicles_Detail/> }/>
						<Route path="/planets/:details" element={<Mars_Details/> } />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
