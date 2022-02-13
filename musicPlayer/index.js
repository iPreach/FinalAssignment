var songs = [

    {
        id: 1,
        imageSrc: "./thumbnails/TN1.png",
        audioSrc: "./audio/audio1.mp3",
        title: "Try - DJ Nicholas"
    },

    {
        id: 2,
        imageSrc: "./thumbnails/TN2.png",
        audioSrc: "./audio/audio2.mp3",
        title: "God a fi everybody - DJ Nicholas"
    },

    {
        id: 3,
        imageSrc: "./thumbnails/lie_like.jpg",
        audioSrc: "./audio/audio3.mp3",
        title: "Lie like - DJ Nicholas"
    },

    {
        id: 4,
        imageSrc: "./thumbnails/TN4.png",
        audioSrc: "./audio/audio4.mp3",
        title: "Like This - DJ Nicholas"
    },

    {
        id: 5,
        imageSrc: "./thumbnails/mercy.jpg",
        audioSrc: "./audio/audio5.mp3",
        title: "Mercy - DJ Nicholas"
    },

    {
        id: 6,
        imageSrc: "./thumbnails/TN2.png",
        audioSrc: "./audio/audio6.mp3",
        title: "Prayer Closet - DJ Nicholas"
    },


]

function generateAudioCards()
{
    let htmlString = "";

    songs.forEach(function(song, index)
    {
        let songHTML = `
        <div class="audio">
            <div class="audio_img">
                <img src="${song.imageSrc}" alt="">
            </div>
            <div class="audio_detail">
                <h1 class="audio_title">${song.title}</h1>
                <button class="btn" onclick="playAudio(${song.id})">Play</button>
            </div>
        </div>
        `;

        htmlString += songHTML;
    })

    document.getElementById("audios").innerHTML = htmlString;

}

generateAudioCards();

function playAudio(songid)
{
    var song = songs.find(function(song, index)
    {
        return song.id === songid
    });

    document.getElementById("thumbnail").src = song.imageSrc;
    document.getElementById("audio_player").src=  song.audioSrc;
    document.getElementById("songName").innerText = song.title;

    document.getElementById("audio_player").play();

}