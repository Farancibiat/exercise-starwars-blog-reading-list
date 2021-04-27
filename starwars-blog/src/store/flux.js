const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            categories:{},            ]
            favorites:[],
            characters:[],
            planets:[],
            vehicles:[]

        },
        actions: {
            loadData: ()=>{
                fetch("https://www.swapi.tech/api/",{
                    method: "GET",
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
                        Object.keys(data.result).map((key)=>{
                            data.result[key].map
                        })
						setStore(data.map{ charcters: data });
					})
					.catch(error => {
						console.log("Error inesperado", error);
					});
            }
        }
    }
};
export default getState;