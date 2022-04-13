import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div classname="traffic-light">
			<div classname="light red"></div>
			<div classname="light yellow"></div>
			<div classname="light green"></div>
		
		</div>
	);
};

export default Home;
