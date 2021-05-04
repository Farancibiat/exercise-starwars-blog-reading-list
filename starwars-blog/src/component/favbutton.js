import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



export const FavButton = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Favorites <span className="badge rounded-pill bg-secondary">{store.favorites.length}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {(store.favorites.length < 1) ? (<Dropdown.Item href="/">Empty List</Dropdown.Item>) :
                        (store.favorites.map((item, ind) => {

                            return (
                                <li>
                                    <div className="dropdown-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <Link to={`/${item.type}/${item.index}`}>
                                                    {store[`${item.type}`][`${item.index}`].name}
                                                </Link>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span key={`${ind}`} onClick={() => actions.delFav(item.type, item.index)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }))
                    }

                </Dropdown.Menu>
            </Dropdown>


        </>
    );
};