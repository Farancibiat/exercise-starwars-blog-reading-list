import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Character = (props) => {
    const { store} = useContext(Context);
    const [charctr, setCharacter] = useState({});
    function getUrlData() {
        let aux = window.location.pathname.split("/");
        setCharacter(store.characters[aux[aux.length - 1]]);
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
                    <h5 className="display-5 text-center"><strong>{charctr.name}</strong></h5>
                    <p className="lead text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut figut, sed quia consequuntur magnu dolores eos qui ratione voluptatem sequi</p>
                </div>
            </div>
            <div className="divider bg-danger"><hr /></div>
            <div className="row text-danger fw-bold">
                <div className="col-4 col-sm-2 text-center">
                    <p>Name</p>
                    <p>{charctr.name}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Birth Year</p>
                    <p>{charctr.birth_year}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Gender</p>
                    <p>{charctr.gender}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Height</p>
                    <p>{charctr.height}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Skin Color</p>
                    <p>{charctr.skin_color}</p>
                </div>
                <div className="col-4 col-sm-2 text-center">
                    <p>Eye Color</p>
                    <p>{charctr.eye_color}</p>
                </div>
            </div>
            <div className="container text-white">
                    <p>space</p>
                    <p>space</p>
                </div>
        </div>

    );
}
export default Character;