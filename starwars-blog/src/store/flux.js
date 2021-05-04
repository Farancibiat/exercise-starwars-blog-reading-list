const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: [],
            characters: [],
            planets: [],
            planetsCheck: false,
            vehicles: []

        },
        actions: {

            loadCharacters: () => {
                for (let i = 1; i <= 10; i++) {
                    fetch(`https://www.swapi.tech/api/people/${i}`, {
                        method: "GET",
                        headers: { "Content-type": "application/json" }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (!data.msg) {
                                let aux=getStore().characters.concat(data.result.properties);
                                setStore({ characters: aux });
                                localStorage.setItem("characters", aux);
                            }
                        })
                        .catch(error => {
                            console.log("Error inesperado", error);
                        });
                }
            },

            loadVehicles: () => {
                for (let i = 1; i <= 10; i++) {
                    fetch(`https://www.swapi.tech/api/vehicles/${i}`, {
                        method: "GET",
                        headers: { "Content-type": "application/json" }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (!data.msg) {
                                let aux=getStore().vehicles.concat(data.result.properties);
                                setStore({ vehicles: aux });
                                localStorage.setItem("vehicles", aux);

                            }
                        })
                        .catch(error => {
                            console.log("Error inesperado", error);
                        });
                }
            },

            loadPlanets: () => {
                for (let i = 1; i <= 16; i++) {
                    console.log(i);
                    fetch(`https://www.swapi.tech/api/planets/${i}`, {
                        method: "GET",
                        headers: { "Content-type": "application/json" }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (!data.msg){
                                let aux= getStore().planets.concat(data.result.properties);
                                setStore({ planets: aux });
                                localStorage.setItem("planets", aux);

                            }
                        })
                        .catch(error => {
                            console.log("Error inesperado", error);
                        });
                }
            },

            addFav: (typ, ind) => {
                let aux= getStore().favorites.concat({ type: typ, index: ind });
                setStore({ favorites: aux });
                // localStorage.setItem("favorites", aux);
            },

            delFav: (typ, ind) => {
                let aux= getStore().favorites.filter(item => !(item.type === typ && item.index === ind));
                setStore({ favorites: aux});
                // localStorage.setItem("favorites", aux);
            }

            // loadLocalStorage:()=>{

            //     if(localStorage.getItem("planets") !== null){
            //         setStore({planets : localStorage.getItem("planets")})
            //     }
            //     if(localStorage.getItem("characters") !== null){
            //         setStore({ characters: localStorage.getItem("characters")})
            //     }
            //     if(localStorage.getItem("vehicles") !== null){
            //         setStore({vehicles: localStorage.getItem("vehicles")})
            //     }
            //     if(localStorage.getItem("favorites") !== null){
            //         setStore({favorites: localStorage.getItem("favorites")})
            //     }

            // }

        }
    }
};
export default getState;