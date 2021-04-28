import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo2.png";
import { FavButton } from "./favbutton";
// import React, { useContext } from "react";

// import { Context } from "../store/appContext";



export const NavigationBar = () => {
    // const { store, actions } = useContext(Context);

    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-1">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="" width="90" />
                            </Link>
                        </div>
                        <div className="col-sm-9"></div>
                        <div className="col-12 col-sm-2 pt-4">
                            <FavButton />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};