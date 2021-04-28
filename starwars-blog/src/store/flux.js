const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: [],
            characters: [],
            countCharacters: 1,
            countPlanets: 1,
            countVehicles: 1,
            
            planets: [],
            planetsCheck: false,
            vehicles: []

        },
        actions: {
            loadCharacters: () => {
                for (let i = 1; i <= 82; i++) {
                    console.log(i);
                    fetch(`https://www.swapi.tech/api/people/${i}`, {
                        method: "GET",
                        headers: { "Content-type": "application/json" }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (!data.msg) {
                                setStore({ characters: getStore().characters.concat(data.result.properties) });
                                setStore({ countsCharacters: getStore().countsCharacters++ });
                            }
                        })
                        .catch(error => {
                            console.log("Error inesperado", error);
                        });
                }
            },
            loadVehicles: () => {
                for (let i = 1; i <= 39; i++) {
                    console.log(i);
                    fetch(`https://www.swapi.tech/api/vehicles/${i}`, {
                        method: "GET",
                        headers: { "Content-type": "application/json" }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (!data.msg) {
                                setStore({ vehicles: getStore().vehicles.concat(data.result.properties) });
                            }
                        })
                        .catch(error => {
                            console.log("Error inesperado", error);
                        });
                }
            },
            loadPlanets: () => {
                for (let i = 1; i <= 60; i++) {
                    console.log(i);
                    fetch(`https://www.swapi.tech/api/planets/${i}`, {
                        method: "GET",
                        headers: { "Content-type": "application/json" }
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (!data.msg)
                                setStore({ planets: getStore().planets.concat(data.result.properties) });
                        })
                        .catch(error => {
                            console.log("Error inesperado", error);
                        });
                }
            }

        }
    }
};
export default getState;