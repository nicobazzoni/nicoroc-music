import { v4 as uuidv4 } from "uuid";
import buried from './audio/buried.wav'
function chillHop() {
	return [
		{
			name: "Beaver Creek",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Daylight",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Keep Going",
			cover:
				"https://f4.bcbits.com/img/a4097316864_10.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://f4.bcbits.com/img/a4097316864_10.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://f4.bcbits.com/img/a4097316864_10.jpg",
			artist: "Swørn",
			audio: "https://s4.bcbits.com/bundle/bundle/1/masonry-9b509fa47727256823bb211fa72001c4.js",
			color: ["#CD607D", "#c94043"],
			
			active: false,
		},
		{
			name: "take back my life",
			cover:
				"https://f4.bcbits.com/img/a4097316864_10.jpg",
			artist: "Nicoroc",
			audio: {buried},
			color: ["#205950", "#2ab3bf"],
			
			active: false,
      
		},
    {
			name: "Malice",
			cover:
				"https://f4.bcbits.com/img/a4097316864_10.jpg",
			artist: "Nicoroc",
			audio: "https://t4.bcbits.com/stream/8ded920c1289708e696bd39e829b9eb1/mp3-v0/3417649753?p=1&ts=1640838157&t=8d3db4c9a9bed2fef0af0319545747ff1dd142b9&token=1640838157_1cbac82b9e262858c500d8dbb8c8be3a50b3e06f",
			color: ["#CD607D", "#c94043"],
			
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;