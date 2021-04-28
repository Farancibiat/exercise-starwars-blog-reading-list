// import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export const FavButton = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Favorites <span class="badge badge-pill badge-secondary">{store.favorites.length}</span>
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    {(store.favorites.length === 0 )? <Dropdown.Item href="/">Empty List</Dropdown.Item> : <Dropdown.Item href="/">Not Empty <FontAwesomeIcon icon={faTrash} /></Dropdown.Item>}

                </Dropdown.Menu>
            </Dropdown>


        </>
    );
};