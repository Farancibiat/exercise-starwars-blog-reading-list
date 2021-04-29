import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Character = (props) => {
    const { store, actions } = useContext(Context);
	return (
		<>
			<footer className="bg-warning text-white py-5 mb-0 pb-0">
				<div className="container">
					hola
				</div>
			</footer>
		</>
    );
}
export default Character;