import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Vehicle = (props) => {
    const { store} = useContext(Context);
    const [vehicle, setVehicle] = useState({});
    function getUrlData() {
        let aux = window.location.pathname.split("/");
        setVehicle(store.vehicles[aux[aux.length - 1]]);
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
                    <h5 className="display-5 text-center"><strong>{vehicle.name}</strong></h5>
                    <p className="lead text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut figut, sed quia consequuntur magnu dolores eos qui ratione voluptatem sequi</p>
                </div>
            </div>
            <div className="divider bg-danger"><hr /></div>
            <div className="row text-danger fw-bold">
                <div className="col-4 col-sm-2 text-center">
                    <p>Name</p>
                    <p>{vehicle.name}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Model</p>
                    <p>{vehicle.model}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Class</p>
                    <p>{vehicle.vehicle_class}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Manufacturer</p>
                    <p>{vehicle.manufacturer}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Cost</p>
                    <p>${vehicle.cost_in_credits}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Passenger Capacity</p>
                    <p>{vehicle.passengers}</p>
                </div>
            </div>
            <div className="container text-white">
                    <p>space</p>
                    <p>space</p>
                </div>
        </div>

    );
}
export default Vehicle;