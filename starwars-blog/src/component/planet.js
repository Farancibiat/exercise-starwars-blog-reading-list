import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Planet = (props) => {
    const { store} = useContext(Context);
    const [planet, setPlanet] = useState({});
    function getUrlData() {
        let aux = window.location.pathname.split("/");
        setPlanet(store.planets[aux[aux.length - 1]]);
    }
    useEffect(() => {
        getUrlData();
    });
    return (
        <div className="container px-5">
            <div className="row">
                <div className="col-12 col-sm-6 no-wrap text-center">
                    <img alt="notInterestingImg" className="img-fluid py-3" src="https://via.placeholder.com/400x300.png" />
                </div>
                <div className="col-12 col-sm-6">
                    <h5 className="display-5 text-center"><strong>{planet.name}</strong></h5>
                    <p className="lead text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut figut, sed quia consequuntur magnu dolores eos qui ratione voluptatem sequi</p>
                </div>
            </div>
            <div className="divider bg-danger"><hr /></div>
            <div className="row text-danger fw-bold">
                <div className="col-4 col-sm-2 text-center">
                    <p>Name</p>
                    <p>{planet.name}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Gravity</p>
                    <p>{planet.gravity}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Terrain</p>
                    <p>{planet.terrain}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Climate</p>
                    <p>{planet.climate}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Orbital Period</p>
                    <p>{planet.orbital_period}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Population</p>
                    <p>{planet.population}</p>
                </div>
            </div>
            <div className="container text-white">
                    <p>space</p>
                    <p>space</p>
                </div>
        </div>

    );
}
export default Planet;