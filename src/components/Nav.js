import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

const pointer = { cursor: "pointer" };

const Nav = ({ libraryStatus, setLibraryStatus,  }) => {


	return (
		<NavContainer>
			<H1 libraryStatus={libraryStatus}>D C S T</H1>
			<Button onClick={() => setLibraryStatus(!libraryStatus)}>
				
				<FontAwesomeIcon className='fa-solid fa-sharp fa-2x' icon={faMusic} color="white"  />
		

			</Button>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1`
	transition: all 0.5s ease;

	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const Button = styled.button`
    top: 0;
	background: transparent;
	
	cursor: pointer;
	background-color: #110f0f;
	padding: 1rem;
	border-radius: 30px;
	color: rgb(222, 222, 222);
	transition: all 0.3s ease;
	&:hover {
		
		color: white;
	}
`;

export default Nav;