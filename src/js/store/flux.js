const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			planets: [],

			people: [],

			vehicles: [],

			favorites: []

		},
		actions: {

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))

					.catch(error => console.log(error))

			},
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(error => console.log(error))

			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(error => console.log(error))

			},

			handleClick: (data) => {
				let store = getStore()
				setStore({ favorites: [...store.favorites, data] })
			},
			handleDelete: (name) => {
				let store = getStore()

				const updatedFavorites = store.favorites.filter(favorite => favorite.name !== name);
				setStore({favorites: updatedFavorites})
			}
		}
	};
};

export default getState;
