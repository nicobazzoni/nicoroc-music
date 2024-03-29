import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<Img src={currentSong.cover} alt={currentSong.name}></Img>
			<H1>{currentSong.name}</H1>
			<H2>{currentSong.artist}</H2>
			<H3>{currentSong.album}</H3>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	margin-top: 10vh;
	min-height: 50vh;
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 50vh;
	height:40vh;
	border-radius: 20px;
	
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const H1 = styled.h2`
	padding: 3rem 1rem 1rem 1rem;
	color: white
`;

const H2 = styled.h3`
	font-size: 1rem;
	color: white;
	border-radius: 20px;
	background-color: #333333;
	opacity: 0.5;
	margin-inline: 1rem;
	padding: 1rem 2rem 1rem 2rem;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	&:hover {
		background-color: lightblue;
		transition: all 0.3s ease;
	}
	
	cursor: pointer;



	

	



`;
const H3 = styled.h3`
padding: 2rem  1rem 1rem;
	font-size: 1rem;
	color: white;
`;

export default Song;