import React from "react";
import Block from "../component/block";
import "../styles/App.css";
export const Home = () => {
	return (
		<>
        <Block title="characters"/>
        <Block title="planets"/>
        <Block title="vehicles"/>
		</>
	);
};
export default Home;