import React, { useState, useRef } from "react";
import styled from "styled-components";
import "../App.css";
import  Modal  from './Modal';
// Import components
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import Nav from "./Nav";
import Credit from "./Credit";
import New from './New'
import { Iocamera } from 'react-icons'
// Import data
import data from "../data";
import Gallery from "react-photo-gallery";
import Photos from './Gallery'
import { photos } from "./photos";
import Gallery2 from './Gallery'
import Contact from './Contact'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCameraRetro, faVideo, faScroll } from "@fortawesome/free-solid-svg-icons";
import {faCoffee } from "@fortawesome/free-solid-svg-icons";
const Music = () => {
	// Ref
	const audioRef = useRef(null);
	const pointer = { cursor: "pointer" };
	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	

   const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};


	//modals

	const [openModal, setOpenModal, ] = useState(false);
    const [openVideoModal, setOpenVideoModal, ] = useState(false);
	const [openContactModal, setOpenContactModal, ] = useState(false);
	
	const openAndCloseModal = () => {
		setOpenModal(!openModal);
	};
	
    
	const openAndCloseVideoModal = () => {
		setOpenVideoModal(!openVideoModal);
	};

	const openAndCloseContactModal = () => {
		setOpenContactModal(!openContactModal);
	};



	return (

		
		<AppContainer libraryStatus={libraryStatus}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			<Credit />
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
			<div> 

				<div >
			<FontAwesomeIcon 
			className="camera fa-solid fa-camera fa-3x "
			
			style={pointer}
			color="white"  
			icon={faCamera} 
		    onClick={() => openAndCloseModal()} 
			
		
			
			 />
			 <FontAwesomeIcon 
			className="videoButton fa-sharp fa-solid fa-video fa-3x" 
			
			style={pointer}
			color="white"  
			icon={faVideo}
		    onClick={() => openAndCloseVideoModal()} 
			
		/>

         <FontAwesomeIcon className=" scroll fa-sharp fa-solid fa-scroll-old fa-3x" 
		 icon={faScroll}
		 style={pointer}
			color="white"  
			
		    onClick={() => openAndCloseContactModal()} 
		 
		 />
			
		</div>

			
	</div>
		<modalContainer>
	    <Modal 
        open={openModal} 
      	onClose={() => setOpenModal(false)} />
     	</modalContainer>
		
	<Contact  openContact={openContactModal}
	onContactClose={() => setOpenContactModal(false)}/> 
		
			
	
		<videoModalContainer >
			<Gallery2 
			openVideo={openVideoModal}
			onVideoClose={() => setOpenVideoModal(false)}/>
		</videoModalContainer>

		
			
			
			
	



		</AppContainer>    	
			
	);

	
};

const AppContainer = styled.div`
    background-color: #000;
	overflow: scroll;
    height: screen;
	transition: all 0.5s ease;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;



export default Music;
