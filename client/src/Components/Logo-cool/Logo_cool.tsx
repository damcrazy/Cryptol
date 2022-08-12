import React from "react";

import styled from 'styled-components'


import "./Logo_cool.css";

const circle = styled.div`
	width: 50%;
	border-radius: 100%;
	background-color: #0000;
	`;


export default function Logo_cool() {
	return (
		<div className="container-logo">
			<circle className="circle"/>
			<circle className="circle"/>
			<circle className="circle"/>
			<circle className="circle"/>
			<circle className="circle"/>
			<circle className="circle"/>
		</div>
	);
}
