console.log("Welcome to Spotify");

// Initialize the variables
let songsongsongIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('gmasterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Guli Mata", filePath: "songs/1.mp3", coverPath: "covers/sicon1.jpg" },
    { songName: "Tum Kya Mile", filePath: "songs/2.mp3", coverPath: "covers/sicon2.jpg" },
    { songName: "Tere Hawaale", filePath: "songs/3.mp3", coverPath: "covers/sicon3.jpg" },
    { songName: "Kya Loge Tum", filePath: "songs/4.mp3", coverPath: "covers/sicon4.jpg" },
    { songName: "Dhokha", filePath: "songs/5.mp3", coverPath: "covers/sicon5.jpg" },
    { songName: "Meri Banogi Kya", filePath: "songs/6.mp3", coverPath: "covers/sicon6.jpg" },
    { songName: "Mujhse Mil", filePath: "songs/7.mp3", coverPath: "covers/sicon7.jpg" },
    { songName: "Manike", filePath: "songs/8.mp3", coverPath: "covers/sicon8.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();
// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    //update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);



})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songIndex}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');


    })

})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'songs/${songInde+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})


